import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { routing } from './sign.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SignComponent]
})
export class SignModule { }
