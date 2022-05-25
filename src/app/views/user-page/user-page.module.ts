import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UserPageComponent} from './user-page.component';
import { UserPageRoutingModule } from './user-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserPageRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ UserPageComponent ]
})
export class UserPageModule { }
