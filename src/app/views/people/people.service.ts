import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor() { }
}

export interface FacultyInfo {
  name:string;
  designation:string
  department:String
  phoneNo:String
  email:String
  imgSrc:String
}
export interface ResearchStudents {
  name:string;
  degree_registered: string;
  degree_and_affiliation: string;
  name_of_supervisors: string;
  research_topic: string;
  email:string;
  imgSrc: string;
}
export interface visitors{
  name: string;
  designation_and_university_of_visitior: string;
  duration: string;
  website: string;
  imgSrc: string;
}
