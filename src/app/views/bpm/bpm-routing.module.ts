import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BPMComponent} from './bpm.component';

const routes: Routes = [
  {
    path: '',
    component: BPMComponent,
    data: {
      title: 'bpm'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BPMRoutingModule {}
