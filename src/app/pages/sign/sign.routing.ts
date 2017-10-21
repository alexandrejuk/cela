import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SignComponent } from './sign.component';

export const routes: Routes = [
  {
    path: '',
    component: SignComponent,
    children: []
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
