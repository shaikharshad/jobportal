import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { ChartOptions } from 'chart.js';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
// Pie
public pieChartOptions: ChartOptions<'pie'> = {
  responsive: false,
};
public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
public pieChartDatasets = [ {
  data: [ 300, 500, 100 ]
} ];
public pieChartLegend = true;
public pieChartPlugins = [];
// 

  constructor(
    private _commonServices:CommonServiceService ,
    

  ) { }
  userLoginData:any
  searchcard:boolean=false
  panelOpenState:boolean = false;

  // getMainWallData(){
  //     this.userLoginData= this._commonServices.LoginData
  //     console.log(this.userLoginData,"this.userLoginData");
  //     localStorage.setItem('currentUser', JSON.stringify(this.userLoginData));

  // }
  ngOnInit(): void {

    // this.getMainWallData()
  }

}
