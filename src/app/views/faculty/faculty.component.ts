import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faculty } from 'src/data-entries/json/faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

export class FacultyComponent {

  constructor(private route: ActivatedRoute){
  }
  designationNames: string[]=[];
  staffUnderDesignation : FacultyInfo[][]=[];

  ngOnInit(): void {
    let filterBy = this.route.snapshot.queryParamMap.get('filterBy');
    this.processFacultyDataForRendering(filterBy?.toString());
  }

  processFacultyDataForRendering(filterBy:any){

    console.log(filterBy)
    for(var i=0;i<faculty.length;i++){

      let key = Object.keys(faculty[i])[0];

      if(filterBy==null || filterBy=='all'|| key==filterBy){
        this.designationNames.push(key);
        let c  = Object.values(faculty[i]);
        this.staffUnderDesignation.push(c[0]);
      }

    }

  }
}

interface FacultyInfo {
  name:string;
  designation:string
  department:String
  phoneNo:String
  email:String
  imgSrc:String
}
