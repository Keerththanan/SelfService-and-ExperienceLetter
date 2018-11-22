import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professional-qualification',
  templateUrl: './add-professional-qualification.component.html',
  styleUrls: ['./add-professional-qualification.component.css']
})
export class ProfessionalQualificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous() {
    this.router.navigate(['/profile/academicInfo']);
  }

  next() {
    this.router.navigate(['/profile/recordOfEmp']);
  }
}
