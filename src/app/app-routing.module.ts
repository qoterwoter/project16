import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { InformationComponent } from './information/information.component';
import { AddworkersComponent } from './addworkers/addworkers.component';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
  },
  {
    path: 'group/:group',
    component: GroupComponent,
  },
  {
    path: 'addworker',
    component: AddworkersComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
