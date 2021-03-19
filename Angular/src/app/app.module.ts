import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeedirectoryComponent } from './employeedirectory/employeedirectory.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'employeedirectory', component: EmployeedirectoryComponent},
  {path: 'addemployee', component: AddemployeeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeedirectoryComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
