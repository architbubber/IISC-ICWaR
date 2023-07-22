import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent {
  // $:any;
  ngOnInit(): void {
    // $("#textFade").hide();
    // $("#textFade").fadeIn("slow");

  }
  openModal(){
    // $("#myModal").show();
  }
}
