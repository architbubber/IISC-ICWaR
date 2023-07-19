import { Component } from '@angular/core';
import {aboutUsData} from '../../../data-entries/json/about-us';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  public aboutUsData = aboutUsData;
  public screenWidth: any;
  public screenHeight: any;


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
