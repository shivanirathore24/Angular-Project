import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = " http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  saveData(regForm : any)
  {
      return this.http.post(this.url,regForm);
  }
}
