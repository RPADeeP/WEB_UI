import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'departments',
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
        path: 'departments',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'create-role',
        loadChildren: () => import('./views/create-role/create-role.module').then(m => m.CreateRoleModule)
      },
      {
        path: 'tasker',
        loadChildren: () => import('./views/tasker/tasker.module').then(m => m.TaskerModule)
      },
      {
        path: 'user-page',
        loadChildren: () => import('./views/user-page/user-page.module').then(m => m.UserPageModule)
      },
      {
        path: 'actions',
        loadChildren: () => import('./views/actions/actions.module').then(m => m.ActionsModule)
      },
      {
        path: 'bpm',
        loadChildren: () => import('./views/bpm/bpm.module').then(m => m.BPMModule)
      },
      {
        path: 'create-department',
        loadChildren: () => import('./views/create-department/create-department.module').then(m => m.CreateDepartmentModule)
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
