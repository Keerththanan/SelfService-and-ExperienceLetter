import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-exp-letter-request-history',
  templateUrl: './exp-letter-request-history.component.html',
  styleUrls: ['./exp-letter-request-history.component.css']
})
export class ExpLetterRequestHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'empName','department','requestedDate','reason','status','issuedDate','provided'];

  history = [
    { 'id':'1', 'empName':'Manager', 'department':'HR', 'requestedDate' :'12/1/2018', 'reason':'leaving', 'status':'jhbj', 'issuedDate':'15/414','provided':'Provided'},
    { 'id':'2', 'empName':'Manager', 'department':'HR', 'requestedDate' :'1/5/2018', 'reason':'salary demand', 'status':'jhbj', 'issuedDate':'15414','provided':'Provided'}
 
  ]
  dataSource = new MatTableDataSource<any>(this.history);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.history);
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
