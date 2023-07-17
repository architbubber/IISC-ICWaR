import { Component, Injectable, OnInit } from '@angular/core';
import { faculty } from 'src/data-entries/json/faculty';

// import  * as facultyData from '../../../data-entries/json/faculty.json';
Injectable()

export interface FacultyData {
  Chairman : FacultyInfo[];
  Core :FacultyInfo[];
  Other : FacultyInfo[];
  // constructor(Chairman : FacultyInfo[],
  // Core :FacultyInfo[],
  // Other : FacultyInfo[]){
  //   this.Chairman = Chairman;
  //   this.Core = Core;
  //   this.Other = Other;
  // }
}
export interface FacultyInfo {
  name:string;
  designation:string
  department:String
  phoneNo:String
  email:String
  imgSrc:String
  // constructor(  name:String,    designation:String,
  //   department:String,
  //   phoneNo:String,
  //   email:String,
  //   imgSrc:String){
  //     this.department = department;
  //     this.designation=designation;
  //     this.email = email;
  //     this.imgSrc = imgSrc;
  //     this.name = name;
  //     this.phoneNo = phoneNo;
  //   }

}

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

export class FacultyComponent {

  designationNames: string[]=[];
  staffUnderDesignation : FacultyInfo[][]=[];
  ngOnInit(): void {
    for(var i=0;i<faculty.length;i++){
      let key = Object.keys(faculty[i])[0];
      this.designationNames.push(key);
      // console.log(Object.values(faculty[i])[])
      let c  = Object.values(faculty[i]);
     this.staffUnderDesignation.push(c[0]);
   }
  //  this.staffUnderDesignation.forEach(f=>{
  //   f.forEach(r=>
  //     console.log(r);
  //   )
  //  })
  }
    // console.log(this.designationNames)

}
// var processd : FacultyData[] ;
