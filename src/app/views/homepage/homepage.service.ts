import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor() { }
}

export interface News{
  title: string;
  date: string;
  imgSrc: string;
}
