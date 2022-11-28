import { Component } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  name=""

  deletes =()=>
  {
    let data:any=
    {
      "name":this.name
    }
    console.log(data)
  }


}
