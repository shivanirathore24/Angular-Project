import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../model/students';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  url = " http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  saveStudentData(regForm : any)
  {
      return this.http.post(this.url,regForm);
  }

  getStudentData(){
    return this.http.get<Students[]>(this.url);
  }

  updateStudentData(updateForm: any){
    return this.http.put(this.url + "/" + updateForm.id, updateForm);
  }

  deleteStudentData(id: number)
  {
    return this.http.delete(this.url+'/'+id);
  }
}
