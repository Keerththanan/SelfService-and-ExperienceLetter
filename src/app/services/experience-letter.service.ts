import { ExperienceLetter } from './../model/experience-letter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceLetterService {
  
  private expLetterAPI = "http://localhost:8080/hrm_system/experience-letter";

  constructor(private http: HttpClient) { }

  public getAllExperienceLetter(){
    return this.http.get<ExperienceLetter[]>(this.expLetterAPI);
  }

  public makeRequestExperienceLetter(experienceLetter: ExperienceLetter){
    return this.http.post<ExperienceLetter>(this.expLetterAPI, experienceLetter);
  }
}
