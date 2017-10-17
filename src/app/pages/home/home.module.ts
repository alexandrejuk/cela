import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { ContentComponent } from './content/content.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    routing
  ],
  declarations: [HomeComponent, ContentComponent]
})
export class HomeModule { }
