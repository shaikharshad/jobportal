import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-wall',
  templateUrl: './side-wall.component.html',
  styleUrls: ['./side-wall.component.css']
})
export class SideWallComponent implements OnInit {

  constructor() { }
  panelOpenState = false;

  ngOnInit(): void {
  }

}
