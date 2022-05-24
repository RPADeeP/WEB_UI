import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskerComponent} from './tasker.component';

const routes: Routes = [
  {
    path: '',
    component: TaskerComponent,
    data: {
      title: 'Tasker'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskerRoutingModule {}
