import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../model/students';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  url = " http://localhost:8080/students";
  constructor(private http: HttpClient) { }

  saveStudentData(regForm : any)
  {
      return this.http.post(this.url,regForm);
  }

  getStudentData(){
    return this.http.get<Students[]>(this.url);
  }
}
