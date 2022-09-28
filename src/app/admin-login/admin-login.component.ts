import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { HttpClient } from '@angular/common/http';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { DatapassServiceService } from 'src/app/datapass-service/datapass-service.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private _commonServices:CommonServiceService ,
    private Router :Router

  ) { }
  error:boolean=false;
  Login: FormGroup = new FormGroup({
    username: new FormControl('arshad'),
    password: new FormControl('a'),
  });
  submit() {
    if (this.Login.valid) {
      this.error= true
    }
    console.log(this.Login.value, "Admin Login");
    
    var abc = this._commonServices.AdminLogin
    console.log(abc,"Admin Data");
 
    if( this.Login.value.username ==  abc[0].username  && 
      this.Login.value.password  == abc[0].password  )
    {
      console.log("do it");
      this.Router.navigateByUrl('/Dashboard');  
    }
    else
    {
      console.log("dont do it");
      
    }
  }


  
  ngOnInit(): void {
  }

}
