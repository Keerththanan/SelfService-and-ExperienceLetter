import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';



@Component({
  selector: 'app-employee-termination-history',
  templateUrl: './employee-termination-history.component.html',
  styleUrls: ['./employee-termination-history.component.css']
})
export class EmployeeTerminationHistoryComponent implements OnInit {

  displayedColumns: string[] = ['empname', 'type','cause', 'date'];

  termination = [
    { 'empname':'siva', 'type':'Manager','cause':'aa', 'date':'12/4/2011' },
    { 'empname':'ravi', 'type':'Manager','cause':'bb', 'date':'22/5/2010' },
    { 'empname':'raja', 'type':'Manager','cause':'cc', 'date':'6/10/2010' },
    { 'empname':'vishal', 'type':'Manager','cause':'dd', 'date':'23/7/2010' },
    { 'empname':'vishnu', 'type':'Manager','cause':'ee', 'date':'6/5/2010' },
    { 'empname':'jeyam', 'type':'Manager','cause':'ff', 'date':'11/5/2010' }    
  ]
  dataSource = new MatTableDataSource<any>(this.termination);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.termination);
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