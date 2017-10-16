import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './../navbar/navbar.component';


import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [NavbarComponent, PagesComponent]
})
export class PagesModule { }
