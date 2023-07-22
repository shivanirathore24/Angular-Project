import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service : CommonService, private route: Router) {}
  regForm = new FormGroup({
    name : new FormControl(),
    username : new FormControl(),
    password : new FormControl()
  })
register()
{
  this.service.saveStudentData(this.regForm.value).subscribe();
  alert("Registered !")
  this.route.navigate(['login'])
}
}
