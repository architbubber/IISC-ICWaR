import { Component } from '@angular/core';
import { publications } from 'src/data-entries/json/publications';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  $=$;
  topOffSet :any;
  publications = publications;

  ngAfterViewInit(){
    this.topOffSet = $('#0').offset()?.top;
    // setInterval(()=>{
    // $('#Publications .row').children().each((index,elem)=>{
    //   console.log((<any>$(elem)));
    //   if((<any>$(elem)).offset().top <= this.topOffSet){
    //     (<any>$(elem)).fadeToggle();
    //   }
    //   else{
    //     (<any>$(elem)).show();
    //   }
    // });},1);
  }

  getKeysOfJson(data:any){
    return Object.keys(data);
  }
  returnJsonOfKey(data:{},key:string){
    let keySet = Object.keys(data);
    let index = keySet.indexOf(key);
  }
  renderRequestedSeminarType(name:string){
    (<any>$('#'+ name.replaceAll(' ','_') )).toggle()
  }
  removeSpaceFromString(str:string){
    return str.replaceAll(' ','_')
  }

  updateHighlghtedProffName(currIndex:number){
    console.log( $('#'+currIndex).offset());
    // $('#'+currIndex).offset({top:this.topOffSet,left:$('#'+currIndex).offset()?.left});

    $('#'+currIndex).addClass('highlightRow2s');

    $('.proffesorsSideNavHighlight').children().each((index, element) => {
      if(index==currIndex)
        $(element).addClass('font-highlight');
      else
        $(element).removeClass('font-highlight');
    });
  }
}
