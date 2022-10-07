import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(  private Router :Router ,
        private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    window.localStorage.removeItem('userLoginData');
    window.localStorage.removeItem('currentUser');

    this.Router.navigate(['/AdminLogin'])
    this.toastr.info('Logout' );

  }

}
