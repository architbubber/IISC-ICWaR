import { Component, Injectable,ɵConsole } from '@angular/core';
import { facultyData } from '../../../data-entries/json/faculty';

@Injectable()

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

export class FacultyComponent {
  data: any = facultyData;
}
