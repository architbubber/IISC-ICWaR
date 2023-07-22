import { Component } from '@angular/core';
import {homepageData} from '../../../data-entries/json/homepage';
import { newsJson } from '../../../data-entries/json/news';
import 'jquery';
import { News } from './homepage.service';
import { STRING_TYPE } from '@angular/compiler';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public newsJsonProcessed: any;
  public news :any;
  public  data = homepageData;
  public screenWidth: any;
  public screenHeight: any;
  public slides = homepageData.slides


  responsiveOptions = [{
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 3
  }];


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.newsJsonProcessed = newsJson;
    (<any>$('.start-cover-animation h1')).html(this.processCoverStirng());

    // var arr:[] = (<any>$('.start-cover-animation span'));

    var count = 0;
      setTimeout(()=>{
        (<any>$('.start-cover-animation h1')).children()[count].hide();
        count+=1;
      },1000
      );

    // setTimeout (()=>{
    //   (<any>$('.start-cover-animation')).hide()},5000
    // );
    (<any>$('.start-cover-animation')).hide();
    console.log(this.newsJsonProcessed[0].title)

    this.news = [
      {random: 'Random', src: 'https://picsum.photos/id/944/900/500'},
      {random: 'Samoa', src: 'https://picsum.photos/id/1011/900/500'},
      {random: 'Tonga', src: 'https://picsum.photos/id/984/900/500'},
      {random: 'Cook Island', src: 'https://picsum.photos/id/944/900/500'},
      {random: 'Niue', src: 'https://picsum.photos/id/1011/900/500'},
      {random: 'American Samoa', src: 'https://picsum.photos/id/984/900/500'}
  ];
  }
  ngAfterInit():void{
    console.log("Now "+(<any>$('.start-cover-animation > h1')).text());
  }
  products = [{id: "1000", code: "f230fh0g3", name: "Bamboo Watch", description: "Product Description",
  category: "Accessories",
}]

processCoverStirng():string{
  var s = '';
  var tmp = (<any>$('.start-cover-animation h1')).text();
  for(var i=0;i<tmp.length;i++)
    s += '<span>'+tmp[i]+'</span>';

  return s;
}

}
