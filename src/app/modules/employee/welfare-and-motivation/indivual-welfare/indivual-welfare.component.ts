import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';

@Component({
  selector: 'app-indivual-welfare',
  templateUrl: './indivual-welfare.component.html',
  styleUrls: ['./indivual-welfare.component.css']
})
export class IndivualWelfareComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','allowance','edit/delete'];

  individualwelfare = [
    { 'id':'1', 'name':'John', 'allowance':'Medical Allowance', 'edit/delete':'' },
    { 'id':'2', 'name':'Peris', 'allowance':'Travalling Allowance', 'edit/delete':'' },
    
  ]
  dataSource = new MatTableDataSource<any>(this.individualwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.individualwelfare);
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

