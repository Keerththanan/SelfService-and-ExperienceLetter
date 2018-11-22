
import { Component, OnInit } from '@angular/core';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }
  title = 'hrm-system-frontend';
  loggedIn= 'false';

  ngOnInit() {
    this.interactionService.loggedInSource$.subscribe(data=>{
      this.loggedIn = data;
    })
  }



}

