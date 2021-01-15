import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyWorker } from '../models/group.model';
import { WorkersDatabase } from '../services/workers.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
})
export class GroupComponent implements OnInit {
  group: number = 1;
  workers: MyWorker[] = [];
  sortType = 'higherId';
  instruments: boolean = false;
  searchStr: string = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private workersDatabase: WorkersDatabase
  ) {
    this.activatedRouter.params.subscribe((param) => {
      this.group = param.group;
    });
  }
  ngOnInit(): void {
    this.getData();
  }

  sortForm: FormGroup = new FormGroup({
    sortType: new FormControl(1),
  });
  currentInstrument() {
    let sortFor ;
    this.sortType = this.sortForm.value.sortType
    switch (this.sortType) {
      case 'higherId':
        sortFor = 'по возрастанию id';
        break;
      case 'lowerId':
        sortFor = 'по убыванию id';
        break;
      case 'higherAge':
        sortFor = 'по возрастанию возраста';
        break;
      case 'lowerAge':
        sortFor = 'по убыванию возраста';
        break;
    }
    return sortFor;
  }
  getAge(date: string) {
    let a = new Date(date);
    let b = new Date();
    let date_diff = b.getTime() - a.getTime();
    let age = Math.floor(date_diff / 1000 / 60 / 60 / 24 / 365);
    return age;
  }
  deleteThisWorker(id: number) {
    this.deleteWorker(id);
    this.getData();
    this.getData();
  }
  editThisWorker(worker: MyWorker) {
    if (worker.edit) {
      worker.edit = false;
      this.editWorker(worker.id, worker);
      this.getData();
      this.getData();
    } else {
      worker.edit = true;
    }
  }
  async getData() {
    try {
      this.workers = await this.workersDatabase.getAll();
    } catch (err) {
      console.log(err);
    }
  }
  async deleteWorker(id: number) {
    try {
      await this.workersDatabase.deleteOneById(id);
    } catch (err) {
      console.log(err);
    }
  }

  async editWorker(id: number, worker: MyWorker) {
    try {
      await this.workersDatabase.putOneById(id, worker);
    } catch (err) {
      console.log(err);
    }
  }
}
