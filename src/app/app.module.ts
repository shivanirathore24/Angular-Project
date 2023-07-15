import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './crud/home/home.component';
import { LoginComponent } from './crud/login/login.component';
import { RegisterComponent } from './crud/register/register.component';
import { ListstudentComponent } from './crud/liststudent/liststudent.component';
import { EditstudentComponent } from './crud/editstudent/editstudent.component';
import { ErrorpageComponent } from './crud/errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListstudentComponent,
    EditstudentComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
