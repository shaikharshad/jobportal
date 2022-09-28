import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';

@Component({
  selector: 'app-web-collection',
  templateUrl: './web-collection.component.html',
  styleUrls: ['./web-collection.component.css']
})
export class WebCollectionComponent implements OnInit {

  constructor(    private _commonServices:CommonServiceService ,
    ) { }

 
    title = 'jobportal';
    isAdmindata:any
    isLogin:boolean=false
    ngOnInit(): void {
  
      // this.isAdmindata = this._commonServices.isLogin
      this.isAdmindata=  localStorage.getItem('isAdmin')
      JSON.parse(this.isAdmindata)
      console.log( this.isAdmindata , "get in web");
     
    }
  

}
