import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-experience-letter',
  templateUrl: './request-experience-letter.component.html',
  styleUrls: ['./request-experience-letter.component.css']
})
export class RequestExperienceLetterComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  public printComponent() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }

}
