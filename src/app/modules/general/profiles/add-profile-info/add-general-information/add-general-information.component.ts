import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-general-information',
  templateUrl: './add-general-information.component.html',
  styleUrls: ['./add-general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/profile/academicInfo']);
  }
}
