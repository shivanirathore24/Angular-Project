import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private route: Router) {}

  loginForm = new  FormGroup({
    username: new FormControl(),
    password : new FormControl()
  })

  login()
  {
    if(this.loginForm.controls.username.value == 'ADMIN' &&
    this.loginForm.controls.password.value == 'shiv.vani24')
    {
      this.route.navigate(['view']);
    }
    // alert("Admin Login Successful !");
  }

}
