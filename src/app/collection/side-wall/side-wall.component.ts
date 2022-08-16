import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import {  RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { DatapassServiceService } from 'src/app/datapass-service/datapass-service.service';

@Component({
  selector: 'app-side-wall',
  templateUrl: './side-wall.component.html',
  styleUrls: ['./side-wall.component.css']
})
export class SideWallComponent implements OnInit {

  constructor( 
    private _commonServices:CommonServiceService,
    private router:ActivatedRoute,
    private _passdata:DatapassServiceService
    
    ) { }
  panelOpenState = false;
  wallData:any
  wallResultAnswerKey:any 
  getMainWallData(){
    this.wallData= this._commonServices.main_wall_data
    this.wallResultAnswerKey= this._commonServices.main_wall_result_answerKey
  
   
    

}


  ngOnInit(): void {
    this.getMainWallData()
    const today = new Date() ;
    console.log(today);
  }

}
