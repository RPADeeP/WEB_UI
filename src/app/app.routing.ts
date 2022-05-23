import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CreateDepartmentComponent } from './views/create-department/create-department.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { CreateRoleComponent } from './views/create-role/create-role.component';
import { BPMComponent } from './views/bpm/bpm.component';
import { UsersComponent } from './views/users/users.component';
import { TaskerComponent } from './views/tasker/tasker.component';
import { ActionsComponent } from './views/actions/actions.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'create-department',
    component: CreateDepartmentComponent,
    data: {
      title: 'Create Department Page'
    }
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
    data: {
      title: 'Departments Page'
    }
  },
  {
    path: 'create-role',
    component: CreateRoleComponent,
    data: {
      title: 'Create Role Page'
    }
  },
  {
    path: 'bpm',
    component: BPMComponent,
    data: {
      title: 'BPM'
    }
  },
  {
    path: 'tasker',
    component: TaskerComponent,
    data: {
      title: 'Tasker'
    }
  },
  {
    path: 'actions',
    component: ActionsComponent,
    data: {
      title: 'Actions Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      
      
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
