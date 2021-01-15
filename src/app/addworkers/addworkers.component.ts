import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyWorker } from '../models/group.model';
import { WorkersDatabase } from '../services/workers.service';

@Component({
  selector: 'app-addworkers',
  templateUrl: './addworkers.component.html',
})
export class AddworkersComponent implements OnInit {
  name: string = '';
  surname: string = '';
  patronymic: string = '';
  phone: string = '';
  date: any = '';
  group = 1;
  workers: MyWorker[] = [];
  newWorker: any = {};
  mask = [
    '+',
    '7',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    '-',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  constructor(private workersDatabase: WorkersDatabase, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }
  addForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    patronymic: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl('', Validators.required),
    group: new FormControl(1),
  });
  addWorker() {
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    // console.log(new Date(this.addForm.value.date).toJSON());
    // console.log(this.workers);
    this.newWorker = {
      id: id,
      name: this.addForm.value.name,
      surname: this.addForm.value.surname,
      patronymic: this.addForm.value.patronymic,
      phone: this.addForm.value.phone,
      email: this.addForm.value.email,
      date: new Date(this.addForm.value.date).toJSON(),
      group: this.addForm.value.group,
      edit: false,
    };
    this.workers.push(this.newWorker);
    this.postNewWorker(this.newWorker);
    this.router.navigate(['./'])
  }

  async getData() {
    try {
      this.workers = await this.workersDatabase.getAll();
    } catch (err) {
      console.log(err);
    }
  }
  async postNewWorker(worker: MyWorker) {
    try {
      await this.workersDatabase.postOne(worker);
    } catch (err) {
      console.log(err);
    }
  }
}
