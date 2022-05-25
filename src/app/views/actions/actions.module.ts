import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ActionsComponent} from './actions.component';
import { ActionsRoutingModule } from './actions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ActionsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ActionsComponent ]
})
export class ActionsModule { }
