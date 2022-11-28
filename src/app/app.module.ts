import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { FormsModule } from '@angular/forms';

const myRouter:Routes=[
  {
    path: "",
    component: StudentEntryComponent
    
  },
  {
    path: "view",
    component: StudentViewComponent
    
  },
  {
    path: "search",
    component: StudentSearchComponent
    
  },
  {
    path: "delete",
    component: StudentDeleteComponent
    
  }


]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    StudentSearchComponent,
    StudentnavbarComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
