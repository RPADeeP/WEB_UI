import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDepartmentComponent} from './create-department.component';

const routes: Routes = [
  {
    path: '',
    component: CreateDepartmentComponent,
    data: {
      title: 'Create Deparment'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  CreateDepartmentRoutingModule {}
