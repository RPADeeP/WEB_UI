import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TaskerComponent} from './tasker.component';
import { TaskerRoutingModule } from './tasker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ TaskerComponent ]
})
export class TaskerModule { }
