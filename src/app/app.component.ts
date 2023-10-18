import { Component } from '@angular/core';
import 'jquery';

//configurations, DO NOT REMOVE
import { configurations } from 'src/data-entries/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  state:boolean = false;
  configurations = configurations;
  title = 'IISC-ICWaR';
  public screenWidth: any;
  public screenHeight: any;

  ngOnInit(): void {

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    $('body').css(configurations['global-settings']);

    //Special script to detect click outside nav on nav open
    $(function() {
      $(document).on('click',function (event) {
        var $target = $(event.target);
        if(!$target.closest('#nav').length )
          (<any>$('.navbar-collapse')).collapse('hide');
      });
    });


  }

}
