import { Component } from '@angular/core';
import { Students } from 'src/app/model/students';
import { CommonService } from 'src/app/shared/common.service';


@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent {
 students : Students[] = [];

 constructor(private service : CommonService) {}

 ngOnInit() : void {
   this.service.getStudentData().subscribe( (data : Students[]) => {
      this.students = data;
   })
}

}
