import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { routing } from './student.routing';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [StudentComponent, ContentComponent]
})
export class StudentModule { }
