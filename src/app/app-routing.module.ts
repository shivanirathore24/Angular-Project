import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './crud/home/home.component';
import { LoginComponent } from './crud/login/login.component';
import { RegisterComponent } from './crud/register/register.component';
import { ErrorpageComponent } from './crud/errorpage/errorpage.component';
import { ListstudentComponent } from './crud/liststudent/liststudent.component';
import { EditstudentComponent } from './crud/editstudent/editstudent.component';

const routes: Routes = [
  /* Path Redirect Bydefault */
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'view', component: ListstudentComponent},
  {path:'edit', component: EditstudentComponent},
  /* WildCard Routing */
  {path:'**',component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
