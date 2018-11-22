import { Component, OnInit , ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-view-response',
  templateUrl: './view-response.component.html',
  styleUrls: ['./view-response.component.css']
})
export class ViewResponseComponent implements OnInit {


  displayedColumns: string[] = ['id', 'empName', 'date', 'type', 'department', 'description', 'responseview'];

  response = [
    { 'id': '1', 'empName': 'Test1', 'date': '12/1/2018', 'type': 'Request', 'department': 'CS', 'description': 'test' },
    { 'id': '2', 'empName': 'Manager', 'date': '12/1/2018', 'type': 'Complain', 'department': 'CSE', 'description': 'test2' }

  ]
  dataSource = new MatTableDataSource<any>(this.response);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.response);
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
