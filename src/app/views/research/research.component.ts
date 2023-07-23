import { Component, TemplateRef, ViewChild } from '@angular/core';
import * as data from '../../../data-entries/json/research';
import 'jquery';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent {
  data=data;
  modalService: any;
  @ViewChild('template') templateRef: TemplateRef<any> | undefined;

  ngOnInit(): void {

  }
  getJsonKeys(data:any):string[]{
    return Object.keys(data);
  }
  getValueForKey(key:string,data:any):any[]{
    let result:any;
     Object.entries(data).forEach(f=>{
      if(f[0]==key)
        result =  f[1];
    })

    return result;
  }
  openModal(modalId: TemplateRef<any>){
    this.modalService.open(modalId);
    }

}
