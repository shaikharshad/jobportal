import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { HttpClient } from '@angular/common/http';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { DatapassServiceService } from 'src/app/datapass-service/datapass-service.service';
import { ThisReceiver } from '@angular/compiler';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers:[LoginServiceService]
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private _commonServices:CommonServiceService ,
    private _LoginServices:LoginServiceService ,
    private Router :Router

  ) { }
  error:boolean=false;
  userLoginData:any
  searchcard:boolean=false
  panelOpenState:boolean = false;
  
  Login: FormGroup = new FormGroup({
    username: new FormControl('arshad'),
    password: new FormControl('a'),
  });
 
  getMainWallData(){
    this.userLoginData= this._commonServices.LoginData
    console.log(this.userLoginData,"this.userLoginData");
    localStorage.setItem('currentUser', JSON.stringify(this.userLoginData));

}
  submit() {
    if (this.Login.valid) {
      this.error= true
    }
    console.log(this.Login.value, "Admin Login");
    var abcd =this._LoginServices.checkuser(this.Login.value.username,this.Login.value.password);
    if(abcd == true)
    {
      console.log("do it");
      this.Router.navigateByUrl('/Dashboard');  
      this.getMainWallData()

    }
    else
    {
      console.log("dont do it");
      
    }
    // if( this.Login.value.username ==  abc[0].username  && 
    //   this.Login.value.password  == abc[0].password  )
    // {
    //   console.log("do it");
    //   this.Router.navigateByUrl('/Dashboard');  
    // }
    // else
    // {
    //   console.log("dont do it");
      
    // }
  }



  
  ngOnInit(): void {
  }

}
