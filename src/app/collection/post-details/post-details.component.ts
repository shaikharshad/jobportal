import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import {  RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { DatapassServiceService } from 'src/app/datapass-service/datapass-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  
    constructor( 
      private _commonServices:CommonServiceService,
      private router:ActivatedRoute,
      private _passdata:DatapassServiceService
      
      ) { }
  
    panelOpenState = false;
    postDetialsTemp:any
    postDetials:any
    wallData1:any
    sub:any
    id:any

    getPostdetial(id:any){
    
      const found = this._commonServices.main_wall_data.find(element => element.id == id);
      console.log(found,"found");
        
      if(found)
      {
        this.postDetials =found
      }

    }
    // wallData:any
    // getMainWallData(){
    //   this._commonServices.GetMainWall().subscribe((data:any) => {
    //     this.wallData = data
    //     console.log(this.wallData,"sdf");
    //   })
    // }
   
    ngOnInit() {
   
      this.sub = this.router.params.subscribe(params => {
        this.id = params['id'];
      });
      console.log(this.id);
      this.getPostdetial(this.id)
      
      // var a =this.router.queryParamMap.subscribe(params =>
      // console.log(params)
      // ); 
      // console.log(a,"aaaaaaaaa");
      
      
      // this.getPostdetial(this.id)



    }
    
  
  }
  