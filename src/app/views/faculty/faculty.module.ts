import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './faculty.component';
import { FacultyRoutingModule } from './faculty-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FacultyRoutingModule
  ],
  declarations: [FacultyComponent]
})
export class FacultyModule { }
