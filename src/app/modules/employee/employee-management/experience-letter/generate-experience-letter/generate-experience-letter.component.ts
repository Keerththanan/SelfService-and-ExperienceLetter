import { User } from './../../../../../model/user';
import { UserService } from './../../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-experience-letter',
  templateUrl: './generate-experience-letter.component.html',
  styleUrls: ['./generate-experience-letter.component.css']
})
export class GenerateExperienceLetterComponent implements OnInit {

  user: User[];
  companyName = "SGIC"

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers() {
    this.userService.getDepartments().subscribe(data => {
      this.user = data;
    })
  }

  public printComponentx() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }

  public printComponent() {
    var content = document.getElementById("print-div").innerHTML;
    var mywindow = window.open('', '', 'height=650,width=1200');

    mywindow.document.write('<html><head><title>Print</title>');
    mywindow.document.write('</head><body style="line-height:40px; font-family:calibri">');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
  }
}

