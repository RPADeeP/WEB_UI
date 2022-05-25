import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BPMComponent} from './bpm.component';
import { BPMRoutingModule } from './bpm-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BPMRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ BPMComponent ]
})
export class BPMModule { }
