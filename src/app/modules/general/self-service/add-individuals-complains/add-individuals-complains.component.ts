import { Component, OnInit } from '@angular/core';
import { SelfService } from 'src/app/model/self-service';
import { SelfServiceService } from 'src/app/services/self-service.service';
import { Department } from 'src/app/model/department';

@Component({
  selector: 'app-add-individuals-complains',
  templateUrl: './add-individuals-complains.component.html',
  styleUrls: ['./add-individuals-complains.component.css']
})
export class AddIndividualsComplainsComponent implements OnInit {
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