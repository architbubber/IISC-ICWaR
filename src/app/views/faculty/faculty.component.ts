import { Component, Injectable, OnInit } from '@angular/core';
import { faculty } from 'src/data-entries/json/faculty';

// import  * as facultyData from '../../../data-entries/json/faculty.json';
Injectable()

export class FacultyData {
  'Chairman' : FacultyInfo[]
  'Core' :FacultyInfo[]
  'Other' : FacultyInfo[]
  constructor(Chairman : FacultyInfo[],
  Core :FacultyInfo[],
  Other : FacultyInfo[]){

  }
}
export class FacultyInfo {
  name:String;
  designation:String
  department:String
  phoneNo:String
  email:String
  imgSrc:String
  constructor(  name:String,    designation:String,
    department:String,
    phoneNo:String,
    email:String,
    imgSrc:String){
      this.department = department;
      this.designation=designation;
      this.email = email;
      this.imgSrc = imgSrc;
      this.name = name;
      this.phoneNo = phoneNo;
    }

}

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

export class FacultyComponent {
  // facultyProcessed = FacultyData[] faculty: any;
  designationNames :any;
  staffUnderDesignation = [[]];
  ngOnInit(): void {


    }
    // console.log(this.designationNames)

}
