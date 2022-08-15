import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { HttpClient } from '@angular/common/http';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { DatapassServiceService } from 'src/app/datapass-service/datapass-service.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-main-wall',
  templateUrl: './main-wall.component.html',
  styleUrls: ['./main-wall.component.css']
})
export class MainWallComponent implements OnInit {
  
  constructor( 
    private _commonServices:CommonServiceService ,
    private router:Router,
    private _passdata: DatapassServiceService
    ) { 
    
  }

  breakpoint: number | undefined;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  wallData:any

  panelOpenState:boolean = false;

  getMainWallData(){
      this.wallData= this._commonServices.main_wall_data
  }


  
  ngOnInit() {
    var self =this
    this.breakpoint = window.innerWidth <= 400 ? 1 : 4;
    setTimeout(function(){
      self.panelOpenState =true
      self.getMainWallData()
      console.log(self.panelOpenState,"hello");
   }, 1000); 

   
    
  }

}
