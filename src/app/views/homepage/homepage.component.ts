import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  $=$;

  slides=['./assets/images/TV Presentation-Slides/Slide1.jpg','./assets/images/TV Presentation-Slides/Slide2.jpg','./assets/images/TV Presentation-Slides/Slide3.jpg']


  ngOnInit(): void {
    setTimeout(function(){
      $('.carousel-control-next').trigger('click')
    },4000);

  }
}
