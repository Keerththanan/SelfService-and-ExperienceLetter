import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-welfare-event',
  templateUrl: './view-welfare-event.component.html',
  styleUrls: ['./view-welfare-event.component.css']
})
export class ViewWelfareEventComponent implements OnInit {

  displayedColumns: string[] = ['nameofevent', 'budjet','benificiaries','dateofevent','edit/delete'];

  viewwelfare = [
    { 'nameofevent':'AA', 'budjet':'1CR' ,'benificiaries':'AA1','dateofevent':'01-08-2018','edit/delete':''},
    { 'nameofevent':'BB', 'budjet':'2CR' ,'benificiaries':'BB1','dateofevent':'01-09-2018','edit/delete':''},
    { 'nameofevent':'CC', 'budjet':'3CR' ,'benificiaries':'CC1','dateofevent':'01-10-2018','edit/delete':''},
    { 'nameofevent':'DD', 'budjet':'4CR' ,'benificiaries':'DD1','dateofevent':'01-11-2018','edit/delete':''},
    { 'nameofevent':'EE', 'budjet':'5CR' ,'benificiaries':'EE1','dateofevent':'01-12-2018','edit/delete':''}
    
  ]
  dataSource = new MatTableDataSource<any>(this.viewwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.viewwelfare);
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