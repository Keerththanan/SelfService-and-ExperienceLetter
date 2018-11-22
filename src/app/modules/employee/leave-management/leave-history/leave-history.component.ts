import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['name','startdate','enddate','numberofdays','type','reason','status','cancel'];

  leavehistory = [
    { 'name':"employee",'startdate':"2017/09/22",'enddate':"2017/09/22",'numberofdays':"7",'type':"annual",'reason':"reason",'status':"accept",'cancel':"cancel"},
    {'name':"employee",'startdate':"2017/09/22",'enddate':"2017/09/22",'numberofdays':"1",'type':"annual",'reason':"reason",'status':"accept",'cancel':"cancel"},
    { 'name':"employee",'startdate':"2017/09/22",'enddate':"2017/09/22",'numberofdays':"2",'type':"annual",'reason':"reason",'status':"accept",'cancel':"cancel"}
  ]
  dataSource = new MatTableDataSource<any>(this.leavehistory);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.leavehistory);
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
