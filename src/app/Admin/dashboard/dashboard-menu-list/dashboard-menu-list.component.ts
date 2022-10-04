import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu-list',
  templateUrl: './dashboard-menu-list.component.html',
  styleUrls: ['./dashboard-menu-list.component.css']
})
export class DashboardMenuListComponent implements OnInit {

  constructor() { }

  getCurnUser:any 
  getCurnUsertemp:any 
  getdata(){

    this.getCurnUsertemp  = localStorage.getItem('currentUser');
    this.getCurnUser=  JSON.parse(  this.getCurnUsertemp)
    //  console.log(JSON.parse(  this.getCurnUser)  , 'retrievedObject: ');
     console.log(this.getCurnUser[0]
      ,"this.getCurnUser");
     
  }
  ngOnInit(): void {
    this.getdata()
  }

}
