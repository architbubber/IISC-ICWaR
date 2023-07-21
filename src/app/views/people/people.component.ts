import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faculty,visitors,researchStudents,projectStaff, officeStaff, postDoctoralScholars } from 'src/data-entries/json/people';
import { FacultyInfo, ResearchStudents } from './people.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent {

  staffUnderDesignation:any;
  type : any;
  dataType: string ='';

  constructor(private route: ActivatedRoute){}

  designationNames: string[]=[];


  ngOnInit(): void {
    this.type = this.route.snapshot.queryParamMap.get('type');
    let filterBy = this.route.snapshot.queryParamMap.get('filterBy');
    switch(this.type){
      case 'faculty':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),faculty);
        break;
      case 'visitors':
        this.processRequestedDataForRendering('Visitors',visitors);
        break;
      case 'researchStudents':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),researchStudents);
        break;
      case 'postDoctoralScholars':
        // this.dataType = 'nested';
        this.processRequestedDataForRendering('Post Doctoral Scholars',postDoctoralScholars);
        break;
      case 'projectStaff':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),projectStaff);
        break;
      case 'officeStaff':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),officeStaff);
        break;
    }
  }

  processNestedDataForRendering(filterBy:any,peopleData:any){
    this.staffUnderDesignation = [];
    for(var i=0;i<peopleData.length;i++){

      let key = Object.keys(peopleData[i])[0];

      if(filterBy==null || filterBy=='all'|| key==filterBy){
        this.designationNames.push(key);
        let c  = Object.values(peopleData[i]);
        this.staffUnderDesignation.push(c[0]);
      }
    }
  }

  processRequestedDataForRendering(designationName:string,data:any){
    this.designationNames.push(designationName);
    this.staffUnderDesignation = data;
  }

  getKeysFromJson(data:any){

    return <[]>Object.keys(data);
  }
}

