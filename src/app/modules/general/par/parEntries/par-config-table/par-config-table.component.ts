import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-par-config-table',
  templateUrl: './par-config-table.component.html',
  styleUrls: ['./par-config-table.component.css']
})
export class ParConfigTableComponent implements OnInit {

  displayedColumns: string[] = ['Configuration', 'Employee','Trainee'];

  parConfig = [
    {'configname':'Communication','selectEmp':'','selectTrainee':''},
    {'configname':'Communica','selectEmp':'','selectTrainee':''},
]

  dataSource = new MatTableDataSource<any>(this.parConfig );


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.parConfig);
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
