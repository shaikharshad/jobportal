import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { HttpClient } from '@angular/common/http';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { DatapassServiceService } from 'src/app/datapass-service/datapass-service.service';
import { ThisReceiver } from '@angular/compiler';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-halltickets',
  templateUrl: './halltickets.component.html',
  styleUrls: ['./halltickets.component.css']
})
export class HallticketsComponent implements OnInit {

  userInfo: any = {};  
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
  searchcard:boolean=false
  panelOpenState:boolean = false;
  wallResultAnswerKey:any
  getMainWallData(){
      this.wallData= this._commonServices.main_wall_data
      this.wallResultAnswerKey= this._commonServices.halltickets
  }


  get(){
    // console.log(newValue);
    console.log(this.name.value,"sf");
    console.log(this.name.value?.length ,"length");
    const len = this.name.value?.length
    let getvalue: string | null
     getvalue= this.name.value
  
     if(len!= undefined){

      if(len >  3 ){
        var  filtredData= this._commonServices.main_wall_data.filter(data => data.post_location == getvalue)
   
        console.log(filtredData,"filtredData");
        this.wallData = filtredData
        if(this.wallData)
        {
          this.searchcard =true
        }
        if(!this.wallData)
        {
          this.searchcard =false

        }
      }
     }
  
 
    if(!getvalue?.length )
    {
      this.wallData= this._commonServices.main_wall_data

    }

  }
  name = new FormControl('');
  
  ngOnInit() {
    var self =this
    this.breakpoint = window.innerWidth <= 400 ? 1 : 4;
    setTimeout(function(){
      self.panelOpenState =true
      self.getMainWallData()
      console.log(self.panelOpenState,"hello");
   }, 1000); 

   this.searchcard =false

  }

}
