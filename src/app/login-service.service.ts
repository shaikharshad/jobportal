import { Injectable } from '@angular/core';
import { CommonServiceService } from './common-services/common-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( 
    private _commonServices:CommonServiceService ,

  ) { }

  checkuser(username: string, password: string){
    var abc = this._commonServices.AdminLogin

    if(username == abc[0].username && password == abc[0].password )
    {
      var LoginuserData = {
        username :abc[0].username ,
        password :abc[0].password
      }
      localStorage.setItem('userLoginData',  JSON.stringify(LoginuserData) )
      return true
    }
    else
    {
      console.log("login service");
      return false
      
    }

  }
}
