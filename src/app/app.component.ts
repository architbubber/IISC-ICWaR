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
    //Special script to detect click outside nav on nav open
    $(function() {
      $(document).on('click',function (event) {
        var $target = $(event.target);
        if(!$target.closest('#nav').length )
          (<any>$('.navbar-collapse')).collapse('hide');
      });
    });
    //////////////////////////////
    (<any>$('.start-cover-animation h1')).html(this.processCoverStirng());
    // (<any>$("h1 span")).hide();
    (<any>$("h3 span")).hide();
    // $("h1 span").each(function(index) {
    //   // $(this).css('text-shadow', '2px 2px 10px white');
    //     // $(this).delay(500*index).fadeIn();
    //     $(this).delay(600*index).toggle(
    //       function(){
    //           $(this).animate({
    //               textShadow:'10px 10px 10px white'
    //           }, 1000000);

    // });});
    var count=0
for(var i =0;i<5;i++){
  setTimeout(function(){
      $("h1 span").eq(count).css('animation','highlight 5s');
    count+=1;
    console.log(count)
  },1000*i);}
    $("h3 span").each(function(index) {
      // $(this).css('text-shadow', '2px 2px 10px white');
      // $(this).delay(500*index).fadeIn();
      $(this).delay(600*index).toggle(
        function(){
            $(this).animate({
                // opacity:1,
                // 'text-shadow':'1px 1px 10px white'
            }, 800);

  });});

  setTimeout(function(){
  (<any>$('.start-cover-animation')).hide()},5000);
    this.state = true;
    //////////////////////////////
  }
  processCoverStirng():string{
    var s = '';
    var tmp = (<any>$('.start-cover-animation h1')).text();
    var tmp2:string = (<any>$('.start-cover-animation h3')).text();
    for(var i=0;i<tmp.length;i++)
      s += '<span>'+tmp[i]+'</span>';
    var t= '';
    tmp2.split(' ').forEach(
      f=>t+= '<span>'+f+' </span>'
    );
    (<any>$('.start-cover-animation h3')).html(t);
    return s;
  }

}
