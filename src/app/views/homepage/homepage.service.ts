import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor() { }
}

export class News{
  title: string;
  date: string;
  imgSrc: string;
  constructor(title:string,date:string,imgSrc:string){
    this.title =title;
    this.date = date;
    this.imgSrc=imgSrc;
  }
}
