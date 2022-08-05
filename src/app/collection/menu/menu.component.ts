import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  displayNavbar: string | undefined;
  isVisible: boolean = true;

  ngOnInit() {
    this.displayNavbar = '1';
  }

}
