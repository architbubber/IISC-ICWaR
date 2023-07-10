import { Component } from '@angular/core';
import * as data from '../../../data-entries/json/homepage.json';
import { newsJson} from '../../../data-entries/json/news';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
  newsJson =  newsJson;
  public news :any;
  public  data = data;
  public screenWidth: any;
  public screenHeight: any;


  slides = ['http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/slideshow1-scaled-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/slideshow0-scaled-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/08/students-1600x600.jpg','http://www.icwar.iisc.ac.in/wp-content/uploads/2020/10/Openday_forslideshow.jpg']

  responsiveOptions = [{
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 3
  }];


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    // console.log(newsJson[0])
    // newsJson.forEach(f=>{
    //   this.news.push(new newsArray(f.imgSrc,f.date,f.title));
    // })
    this.news = [
      {random: 'Random', src: 'https://picsum.photos/id/944/900/500'},
      {random: 'Samoa', src: 'https://picsum.photos/id/1011/900/500'},
      {random: 'Tonga', src: 'https://picsum.photos/id/984/900/500'},
      {random: 'Cook Island', src: 'https://picsum.photos/id/944/900/500'},
      {random: 'Niue', src: 'https://picsum.photos/id/1011/900/500'},
      {random: 'American Samoa', src: 'https://picsum.photos/id/984/900/500'}
  ];
  }
  products = [{id: "1000", code: "f230fh0g3", name: "Bamboo Watch", description: "Product Description",
  category: "Accessories",
}]

}
