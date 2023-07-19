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
  constructor(private route: ActivatedRoute){}

  designationNames: string[]=[];


  ngOnInit(): void {
    this.type = this.route.snapshot.queryParamMap.get('type');
    let filterBy = this.route.snapshot.queryParamMap.get('filterBy');
    switch(this.type){
      case 'faculty':
        this.staffUnderDesignation =  [];
        this.processFacultyDataForRendering(filterBy?.toString());
        break;
      case 'visitors':
        this.processRequestedDataForRendering('Visitors',visitors);
        break;
      case 'researchStudents':
        this.processRequestedDataForRendering('Research Students',researchStudents);
        break;
      case 'postDoctoralScholars':
        this.processRequestedDataForRendering('Post Doctoral Scholars',postDoctoralScholars);
        break;
      case 'projectStaff':
        this.processRequestedDataForRendering('Project Staff',projectStaff);
        break;
      case 'officeStaff':
        this.processRequestedDataForRendering('Office Staff',officeStaff);
        break;
    }
  }

  processFacultyDataForRendering(filterBy:any){

    for(var i=0;i<faculty.length;i++){

      let key = Object.keys(faculty[i])[0];

      if(filterBy==null || filterBy=='all'|| key==filterBy){
        this.designationNames.push(key);
        let c  = Object.values(faculty[i]);
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

