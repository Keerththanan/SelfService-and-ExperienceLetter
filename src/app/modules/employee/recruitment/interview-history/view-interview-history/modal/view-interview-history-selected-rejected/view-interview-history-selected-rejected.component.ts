import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-interview-history-selected-rejected',
  templateUrl: './view-interview-history-selected-rejected.component.html',
  styleUrls: ['./view-interview-history-selected-rejected.component.css']
})
export class ViewInterviewHistorySelectedRejectedComponent implements OnInit {

  displayedColumns: string[] = ['id', 'position','jobdescription'];

  appoinments = [
    { 'id':'Hello', 'position':'Manager','jobdescription' :'test1'}
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
