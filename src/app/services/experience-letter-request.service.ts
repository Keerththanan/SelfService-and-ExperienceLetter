import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExperienceLetterRequest } from '../model/experience-letter-request';

@Injectable({
  providedIn: 'root'
})
export class ExperienceLetterRequestService {

  private expLetterRequestAPI = "http://localhost:8080/hrm_system/requestexpletter";

  constructor(private http: HttpClient) { }

  public getAllExperienceLetterRequest(){
    return this.http.get<ExperienceLetterRequest[]>(this.expLetterRequestAPI);
  }

  public makeRequestExperienceLetter(experienceLetterRequest: ExperienceLetterRequest){
    return this.http.post<ExperienceLetterRequest>(this.expLetterRequestAPI, experienceLetterRequest);
  }
}
