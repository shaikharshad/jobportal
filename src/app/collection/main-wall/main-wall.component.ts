import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { HttpClient } from '@angular/common/http';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

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


  main_wall_data =[
    {
      "id" :1,
      "post_name": 'THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
      ]
    },
    {
      "id" :2,
      "post_name": 'THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":2,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
      ]
    },
    {
      "id" :3,
      "post_name": 'THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":3,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
      ]
    },
    {
      "id" :4,
      "post_name": 'THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":4,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
      ]
    },
    {
      "id" :5,
      "post_name": 'THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":5,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
      ]
    },
    {
      "id" :6,
      "post_name": 'THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":6,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
      ]
    }
  ]
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
    console.log(this.main_wall_data,"main_wall_data");
    
  }

}
