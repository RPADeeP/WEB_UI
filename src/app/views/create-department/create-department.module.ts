import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CreateDepartmentComponent} from './create-department.component';
import {  CreateDepartmentRoutingModule } from './create-department-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreateDepartmentRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CreateDepartmentComponent ]
})
export class CreateDepartmentModule { }
