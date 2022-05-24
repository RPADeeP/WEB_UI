import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CreateRoleComponent} from './create-role.component';
import { CreateRoleRoutingModule } from './create-role-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreateRoleRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CreateRoleComponent ]
})
export class CreateRoleModule { }
