import { ExperienceLetterRequestService } from './../../../../../services/experience-letter-request.service';
import { Component, OnInit } from '@angular/core';
import { ExperienceLetterRequest } from 'src/app/model/experience-letter-request';

@Component({
  selector: 'app-request-experience-letter',
  templateUrl: './request-experience-letter.component.html',
  styleUrls: ['./request-experience-letter.component.css']
})
export class RequestExperienceLetterComponent implements OnInit {

  experienceLetterRequestObj = new ExperienceLetterRequest();
  
  constructor(private experienceLetterRequestService: ExperienceLetterRequestService ) { }

  ngOnInit() {
  }

  createRequest(){
    this.experienceLetterRequestObj.id = 0;
    this.experienceLetterRequestObj.createdAt = new Date();
    this.experienceLetterRequestObj.status = "Not Verified";
    this.experienceLetterRequestObj.user = 1;
    this.experienceLetterRequestService.makeRequestExperienceLetter(this.experienceLetterRequestObj).subscribe(data => {
      console.log("request success");
    })
  }

  public printComponent() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }
}
