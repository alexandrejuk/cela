import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'sign', loadChildren: './sign/sign.module#SignModule' },
      { path: 'student', loadChildren: './student/student.module#StudentModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
