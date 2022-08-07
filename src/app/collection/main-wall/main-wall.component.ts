import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-wall',
  templateUrl: './main-wall.component.html',
  styleUrls: ['./main-wall.component.css']
})
export class MainWallComponent implements OnInit {
  
  constructor( private _commonServices:CommonServiceService) { }

  breakpoint: number | undefined;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  onResize(f:any)
  {

  }
  panelOpenState = false;

  wallData:any
  getMainWallData(){
    this._commonServices.GetMainWall().subscribe((data:any) => {

      this.wallData = data
      console.log(this.wallData,"sdf");
      

    })
  }
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 4;

    this.getMainWallData()

  }

}
