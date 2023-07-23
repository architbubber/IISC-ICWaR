import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor() { }

  getJsonKeys(data:any){
    return Object.keys(data);
  }
  getJsonValues(data:any){
    return Object.values(data);
  }
  // getJsonKeysForObjet(key:string,data:any){
  //   var tmp = Object.entries(data);
  //   tmp.forEach(f=>{
  //     f.keys.m
  //   })
  // }
}
