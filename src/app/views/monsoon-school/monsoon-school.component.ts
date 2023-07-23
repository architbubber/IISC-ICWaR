import { Component } from '@angular/core';
import { monsoonPageData } from 'src/data-entries/json/monsoon-schools';
import { JsonServiceService } from 'src/app/services/json-service.service';
@Component({
  selector: 'app-monsoon-school',
  templateUrl: './monsoon-school.component.html',
  styleUrls: ['./monsoon-school.component.scss']
})
export class MonsoonSchoolComponent {
  monsoonPageData = monsoonPageData;
  getJsonKeys(data:any){
    return Object.keys(data);
  }
  getJsonValues(data:any):any[]{
    return Object.values(data);
  }
}
