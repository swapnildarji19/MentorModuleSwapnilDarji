import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeedirectoryComponent } from './employeedirectory/employeedirectory.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employeedirectory', component: EmployeedirectoryComponent , canActivate :[AuthGuard] },
  { path: 'addemployee', component: AddemployeeComponent, canActivate :[AuthGuard]},
  { path: '',   redirectTo: '/employeedirectory', pathMatch: 'full' }, // redirect to `first-component`
  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
