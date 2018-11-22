import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit {

  displayedColumns: string[] = ['id','name','department','numberofdays','type','reason','accept','reject'];

  leave = [
    {'id':'1', 'name':"employee",'department':"emp",'numberofdays':"1",'type':"annual",'reason':"reason",'accept':"accept",'reject':"reject"},
    {'id':'2', 'name':"employee",'department':"emp",'numberofdays':"2",'type':"annual",'reason':"reason",'accept':"accept",'reject':"reject"},
    {'id':'3', 'name':"employee",'department':"emp",'numberofdays':"3",'type':"annual",'reason':"reason",'accept':"accept",'reject':"reject"}
    
    
  ]

  dataSource = new MatTableDataSource<any>(this.leave);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.leave);
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