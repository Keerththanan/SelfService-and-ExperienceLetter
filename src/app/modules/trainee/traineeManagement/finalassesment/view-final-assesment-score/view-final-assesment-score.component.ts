import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-final-assesment-score',
  templateUrl: './view-final-assesment-score.component.html',
  styleUrls: ['./view-final-assesment-score.component.css']
})
export class ViewFinalAssesmentScoreComponent implements OnInit {

  displayedColumns: string[] = ['traineenum','traineename', 'matricesmeasured','relevantscromatrics','finalscore','remarks','edit/delete'];

  finalassesment = [
    { 'traineenum':'1', 'traineename':'aa' ,'matricesmeasured':'AA1','relevantscromatrics':'q','finalscore':'3','remarks':'3','edit/delete':''},
    { 'traineenum':'2', 'traineename':'bb' ,'matricesmeasured':'BB1','relevantscromatrics':'w','finalscore':'6','remarks':'3','edit/delete':''},
    { 'traineenum':'3', 'traineename':'cc' ,'matricesmeasured':'CC1','relevantscromatrics':'e','finalscore':'2','remarks':'3','edit/delete':''},
    { 'traineenum':'4', 'traineename':'dd' ,'matricesmeasured':'DD1','relevantscromatrics':'r','finalscore':'5','remarks':'3','edit/delete':''},
    { 'traineenum':'5', 'traineename':'ee' ,'matricesmeasured':'EE1','relevantscromatrics':'t','finalscore':'4','remarks':'3','edit/delete':''}
    
  ]
  dataSource = new MatTableDataSource<any>(this.finalassesment);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.finalassesment);
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
