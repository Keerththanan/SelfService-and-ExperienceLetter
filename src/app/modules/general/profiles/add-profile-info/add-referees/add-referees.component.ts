import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-referees',
  templateUrl: './add-referees.component.html',
  styleUrls: ['./add-referees.component.css']
})
export class RefereesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous() {
    this.router.navigate(['/profile/recordOfEmp']);
  }

  next() {
    this.router.navigate(['/profile/add-attachment']);
  }

}
