import { Component } from '@angular/core';
import * as data from '../../../data-entries/json/homepage.json';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  images:any;
  responsiveOptions;

  constructor() {
      this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 3
      }];
  }
  slides = ['http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/slideshow1-scaled-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/slideshow0-scaled-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/08/students-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/Openday_forslideshow.jpg']
  data = data;

  ngOnInit(): void {
    this.images = [
        {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
        {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
        {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
        {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
        {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
        {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
    ];
}
}
