import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-record-applicant-cv',
  templateUrl: './view-record-applicant-cv.component.html',
  styleUrls: ['./view-record-applicant-cv.component.css']
})
export class ViewRecordApplicantCvComponent implements OnInit {

  displayedColumns: string[] = ['v_name','v_email', 'v_nic','v_dob','v_qualification','v_location','v_post','v_cv','v_edit'];

  records = [
    { 'v_name':'name1','v_email':'email', 'v_nic':'1','v_dob':'5.5.2005','v_qualification':'abc','v_location':'pqr','v_post':'sss','v_cv':'abc','v_edit':' ',}
  
  ]
  dataSource = new MatTableDataSource<any>(this.records);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.records);
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