import { Component, OnInit } from '@angular/core';
import { SelfServiceService } from 'src/app/services/self-service.service';
import { SelfService } from 'src/app/model/self-service';
import { Department } from 'src/app/model/department';

@Component({
  selector: 'app-form-complaint',
  templateUrl: './form-complaint.component.html',
  styleUrls: ['./form-complaint.component.css']
})
export class FormComplaintComponent implements OnInit {

  constructor(private selfServiceService: SelfServiceService) { }

  selfService: SelfService[];
  selfServiceObj = new SelfService();

  departments: Department[];

  ngOnInit() {
    this.getDepartments();
  }

  // This should be written the DEPARTMENT SEPERATELY
  getDepartments(){
    return this.selfServiceService.getDepartments().subscribe(
      data => {
        this.departments = data;
      }
    )
  }

  createComplain(){
    return this.selfServiceService.createComplain(this.selfServiceObj).subscribe(data => {
      console.log(this.selfServiceObj);
    })
  }


}
