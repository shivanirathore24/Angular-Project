import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service : CommonService) {}
  regForm = new FormGroup({
    name : new FormControl(),
    username : new FormControl(),
    password : new FormControl()
  })
register()
{
  this.service.saveData(this.regForm.value).subscribe();
  alert("Registered !")
}
}
