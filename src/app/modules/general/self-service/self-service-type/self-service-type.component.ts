import { Component, OnInit } from '@angular/core';
import { SelfServiceType } from 'src/app/model/self-service-type';
import { SelfServiceTypeService } from 'src/app/services/self-service-type.service';

@Component({
  selector: 'app-self-service-type',
  templateUrl: './self-service-type.component.html',
  styleUrls: ['./self-service-type.component.css']
})
export class SelfServiceTypeComponent implements OnInit {

  selfServiceType : SelfServiceType[];
  selfServiceTypeObj= new SelfServiceType();
  msg:any;

  constructor(private selfServiceTypeService:SelfServiceTypeService) { }

  ngOnInit() {
    this.getSelfServiceType();

  }

  getSelfServiceType(){
    this.selfServiceTypeService.getAllSelfServiceType().subscribe(data=>{
      this.selfServiceType=data;
      console.log(data);
    })
    }
    
    createSelfServiceType(){
  this.selfServiceTypeService.createSelfServiceType(this.selfServiceTypeObj).subscribe(data=>{
    console.log(data);
    this.msg="?_?";
    this.getSelfServiceType();
  })
}

deleteId(selfServiceType){
  console.log(selfServiceType);
  this.selfServiceTypeObj=Object.assign({},this.selfServiceTypeObj);
}

deleteSelfServiceType(){
  this.selfServiceTypeService.deleteSelfServiceType(this.selfServiceTypeObj).subscribe(data=>{
    console.log(data);
    this.msg="Delated successfully";
    this.getSelfServiceType();
  })
}

updateSelfServiceType(){
  this.selfServiceTypeService.updateSelfServiceType(this.selfServiceTypeObj).subscribe(data=>{
    console.log(data);
    this.msg="Data updated successfully";
    this.getSelfServiceType();
  })
}
}
