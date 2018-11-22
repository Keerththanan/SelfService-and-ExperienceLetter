import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';

@Component({
  selector: 'app-general-welfare',
  templateUrl: './general-welfare.component.html',
  styleUrls: ['./general-welfare.component.css']
})
export class GeneralWelfareComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','allocationdetails','edit/delete'];

  generalwelfare = [
    { 'id':'1', 'name':'Common seminar', 'allocationdetails':'for all employees', 'edit/delete':'' },
  
    
  ]
  dataSource = new MatTableDataSource<any>(this.generalwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.generalwelfare);
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

