import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelfService } from '../model/self-service';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class SelfServiceService {

  private selfServiceAPI = "http://localhost:8080/hrm_system/selfservice";
  //URL to get department
  private departmentAPI = "http://localhost:8080/hrm_system/department";

  constructor(private http: HttpClient) { }

  public getDepartments(){
    return this.http.get<Department[]>(this.departmentAPI)
  }

  public createComplain(selfService: SelfService){
    return this.http.post<SelfService>(this.selfServiceAPI, selfService)
  }
}
