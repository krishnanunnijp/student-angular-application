import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  Student_name=""
  Roll_no=""
  Admission_number=""
  Mobile_number=""
  college=""
  parent_name=""
  parent_ph_no=""
  username=""
  password=""
  confirm_password=""

  studententer =()=>
  {
    let data:any={
    "Student_name": this.Student_name,
    "Roll_no":this.Roll_no,
    "Admission_number":this.Admission_number,
    "Mobile_number":this.Mobile_number,
    "college":this.college,
    "parent_name":this.parent_name,
    "parent_ph_no":this.parent_ph_no,
    "username":this.username,
    "password":this.password,
    "confirm_password":this.confirm_password


  }
  console.log(data)
  }

}
