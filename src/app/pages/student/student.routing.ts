import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StudentComponent } from './student.component';

export const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      // { path: 'novo', component: NovoClienteComponent , canDeactivate: [FormCanDeactivateGuard] },
      // { path: 'gerenciar', component: GerenciarComponent },
      // { path: 'detalhes/:id', component: DetalhesClienteComponent, canDeactivate: [FormCanDeactivateGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
