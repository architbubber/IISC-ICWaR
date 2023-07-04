import { Component } from '@angular/core';
import {facultyData} from '../../../data-entries/json/faculty';



@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

export class FacultyComponent {
  data: any = facultyData;

}
