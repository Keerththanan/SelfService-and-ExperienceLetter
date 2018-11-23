import { ExperienceLetterService } from 'src/app/services/experience-letter.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ExperienceLetter } from 'src/app/model/experience-letter';

@Component({
  selector: 'app-exp-letter-request-history',
  templateUrl: './exp-letter-request-history.component.html',
  styleUrls: ['./exp-letter-request-history.component.css']
})
export class ExpLetterRequestHistoryComponent implements OnInit {

  experienceLetter: ExperienceLetter[];

  displayedColumns: string[] = ['id','empName','department','requestedDate','status','issueDate','letterProcess'];

  dataSource = new MatTableDataSource<any>(this.experienceLetter);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private experienceLetterService: ExperienceLetterService) { }

  ngOnInit() {
    this.getAllExperienceLetter();
  }

  public getAllExperienceLetter(){
    this.experienceLetterService.getAllExperienceLetter().subscribe(data=>{
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
