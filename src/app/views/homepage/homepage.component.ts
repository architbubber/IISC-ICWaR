import { Component } from '@angular/core';
import * as data from '../../../data-entries/json/homepage.json';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  slides = ['http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/slideshow1-scaled-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/slideshow0-scaled-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/08/students-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/Openday_forslideshow.jpg']
  data = data;
}
