import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-interview-history-internal-external',
  templateUrl: './view-interview-history-internal-external.component.html',
  styleUrls: ['./view-interview-history-internal-external.component.css']
})
export class ViewInterviewHistoryInternalExternalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'position'];

  appoinments = [
    { 'id':'Hello', 'position':'Manager'}
  ]
  dataSource = new MatTableDataSource<any>(this.appoinments);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.appoinments);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
