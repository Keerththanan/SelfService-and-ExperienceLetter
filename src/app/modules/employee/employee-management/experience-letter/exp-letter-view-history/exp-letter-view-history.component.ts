import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ExperienceLetterRequestService } from 'src/app/services/experience-letter-request.service';

@Component({
  selector: 'app-exp-letter-view-history',
  templateUrl: './exp-letter-view-history.component.html',
  styleUrls: ['./exp-letter-view-history.component.css']
})
export class ExpLetterViewHistoryComponent implements OnInit {

  displayedColumns: string[] = ['requestedDate','reason','status','issuedDate','provided'];

  experienceLetter = [];

  dataSource = new MatTableDataSource<any>(this.experienceLetter);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private experienceLetterRequestService: ExperienceLetterRequestService) { }

  ngOnInit() {
    this.getAllExperienceLetter();
  }

  public getAllExperienceLetter(){
    this.experienceLetterRequestService.getAllExperienceLetterRequest().subscribe(data=>{
      this.experienceLetter = data;
      this.dataSource = new MatTableDataSource<any>(data);
      console.log(data);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
