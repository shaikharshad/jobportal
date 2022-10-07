import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

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
