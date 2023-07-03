import { Component } from '@angular/core';
import * as facultyList from '../../data-entries/json/faculty.json';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {
  facultyList = facultyList;
}
