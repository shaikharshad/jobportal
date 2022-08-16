import { Injectable    } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor( private http : HttpClient) { }

  main_wall_data =[
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "isNew":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_age_req":25,
      "post_location":'parli',
      "post_fees":500,
      "post_obc_fees":500,
      "post_open_fees":300,
      "post_other_fees":100,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
      "post_pdf_document":'' ,
      "post_department":"",
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA,MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":2,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":23,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":3,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"MSC"
        },
        {
          "post_id":1,
          "sub_post_category_id":4,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":5,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":55,
          "sub_post_education_req":"MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":6,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":7,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":8,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":9,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":10,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":11,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"CA"
        },
        {
          "post_id":1,
          "sub_post_category_id":12,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        }
      ]
    },
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":false,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_age_req":25,
      "post_location":'selu',
      "post_fees":500,
      "post_obc_fees":500,
      "post_open_fees":300,
      "post_other_fees":100,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA,MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":2,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":23,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":3,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"MSC"
        },
        {
          "post_id":1,
          "sub_post_category_id":4,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":5,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":55,
          "sub_post_education_req":"MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":6,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":7,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":8,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":9,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":10,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":11,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"CA"
        },
        {
          "post_id":1,
          "sub_post_category_id":12,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        }
      ]
    },
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":false,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_age_req":25,
      "post_location":'parbhani',
      "post_fees":500,
      "post_obc_fees":500,
      "post_open_fees":300,
      "post_other_fees":100,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA,MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":2,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":23,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":3,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"MSC"
        },
        {
          "post_id":1,
          "sub_post_category_id":4,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":5,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":55,
          "sub_post_education_req":"MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":6,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":7,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":8,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":9,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":10,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":11,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"CA"
        },
        {
          "post_id":1,
          "sub_post_category_id":12,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        }
      ]
    },
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_age_req":25,
      "post_location":'parbhani',
      "post_fees":500,
      "post_obc_fees":500,
      "post_open_fees":300,
      "post_other_fees":100,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA,MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":2,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":23,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":3,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"MSC"
        },
        {
          "post_id":1,
          "sub_post_category_id":4,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":5,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":55,
          "sub_post_education_req":"MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":6,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":7,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":8,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":9,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":10,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":11,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"CA"
        },
        {
          "post_id":1,
          "sub_post_category_id":12,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        }
      ]
    },
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_age_req":25,
      "post_location":'parbhani',
      "post_fees":500,
      "post_obc_fees":500,
      "post_open_fees":300,
      "post_other_fees":100,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA,MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":2,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":23,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":3,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"MSC"
        },
        {
          "post_id":1,
          "sub_post_category_id":4,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":5,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":55,
          "sub_post_education_req":"MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":6,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":7,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":8,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":9,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":10,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":11,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"CA"
        },
        {
          "post_id":1,
          "sub_post_category_id":12,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        }
      ]
    },
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_age_req":25,
      "post_location":'parbhani',
      "post_fees":500,
      "post_obc_fees":500,
      "post_open_fees":300,
      "post_other_fees":100,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA,MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":2,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":23,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":3,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"MSC"
        },
        {
          "post_id":1,
          "sub_post_category_id":4,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":5,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":55,
          "sub_post_education_req":"MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":6,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":7,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":8,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":9,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":10,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":11,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"CA"
        },
        {
          "post_id":1,
          "sub_post_category_id":12,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        }
      ]
    },
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_details":'THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.THDC India Limited, is under the ownership of National Thermal Power Corporation Limited-THDCIL Recruitment 2022 (THDCIL Bharti 2022) for 109 Engineers Posts.',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "post_image":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "post_loga":'https://www.thdc.co.in/sites/all/themes/thdc//images/logo-m.png',
      "isActive":true,
      "post_type":'THDCIL',
      "post_no_of_post":200,
      "post_age_req":25,
      "post_location":'parbhani',
      "post_fees":500,
      "post_obc_fees":500,
      "post_open_fees":300,
      "post_other_fees":100,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
      "post_pdf_document":'' ,
      "post_category": [
        {
          "post_id":1,
          "sub_post_category_id":1,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA,MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":2,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":23,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":3,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"MSC"
        },
        {
          "post_id":1,
          "sub_post_category_id":4,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":""
        },
        {
          "post_id":1,
          "sub_post_category_id":5,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":55,
          "sub_post_education_req":"MCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":6,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":7,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":8,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":9,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        },
        {
          "post_id":1,
          "sub_post_category_id":10,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BCA"
        },
        {
          "post_id":1,
          "sub_post_category_id":11,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"CA"
        },
        {
          "post_id":1,
          "sub_post_category_id":12,
          "sub_post_name":'CAPF मधील उपनिरीक्षक (GD)',
          "sub_post_total_no":20,
          "sub_post_education_req":"BA"
        }
      ]
    },
 
  ]

  main_wall_New_post=[

    {
    "id" :1,
    "post_advertisment_no":'BA1234567',
    "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
    "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
    "post_publish_date": '02-02-2022',
    "post_closed_date": '02-07-2022',
    "post_closed_date_extended": '02-08-2022',
    "isActive":true,
    "isNew":true,
    "post_location":'parbhani',
    "post_fees":500,
    "post_exam_date":'16-08-2022',
    "post_official_website":'www.google.com',
    },
    {
    "id" :2,
    "post_advertisment_no":'BA1234567',
    "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
    "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
    "post_publish_date": '02-02-2022',
    "post_closed_date": '02-07-2022',
    "post_closed_date_extended": '02-08-2022',
    "isActive":true,
    "post_location":'parbhani',
    "post_fees":500,
    "post_exam_date":'20-12-2023',
    "post_official_website":'www.google.com',
    },
    {
    "id" :3,
    "post_advertisment_no":'BA1234567',
    "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
    "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
    "post_publish_date": '02-02-2022',
    "post_closed_date": '02-07-2022',
    "post_closed_date_extended": '02-08-2022',
    "isActive":true,
    "post_location":'parbhani',
    "post_fees":500,
    "post_exam_date":'20-12-2023',
    "post_official_website":'www.google.com',
    },
    {
    "id" :4,
    "post_advertisment_no":'BA1234567',
    "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
    "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
    "post_publish_date": '02-02-2022',
    "post_closed_date": '02-07-2022',
    "post_closed_date_extended": '02-08-2022',
    "isActive":true,
    "post_location":'parbhani',
    "post_fees":500,
    "post_exam_date":'20-12-2023',
    "post_official_website":'www.google.com',
    },
    {
    "id" :5,
    "post_advertisment_no":'BA1234567',
    "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
    "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
    "post_publish_date": '02-02-2022',
    "post_closed_date": '02-07-2022',
    "post_closed_date_extended": '02-08-2022',
    "isActive":true,
    "post_location":'parbhani',
    "post_fees":500,
    "post_exam_date":'20-12-2023',
    "post_official_website":'www.google.com',
    },
  ]

  main_wall_result_answerKey = [
    {
      "id" :1,
      "post_advertisment_no":'BA1234567',
      "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
      "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
      "post_publish_date": '02-02-2022',
      "post_closed_date": '02-07-2022',
      "post_closed_date_extended": '02-08-2022',
      "isActive":true,
      "post_location":'parbhani',
      "post_fees":500,
      "post_exam_date":'20-12-2023',
      "post_official_website":'www.google.com',
       "isResult":false,
       "resultDate" :"20-3-3034",
       "resultLink":"",
       "isAnswerKey":true,
       "answerKeyDate":"20-3-3034",
       "anserKeypdfLink": "",
       
      },
      {
        "id" :2,
        "post_advertisment_no":'BA1234567',
        "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
        "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
        "post_publish_date": '02-02-2022',
        "post_closed_date": '02-07-2022',
        "post_closed_date_extended": '02-08-2022',
        "isActive":true,
        "post_location":'parbhani',
        "post_fees":500,
        "post_exam_date":'20-12-2023',
        "post_official_website":'www.google.com',
        "isResult":true,
        "resultDate" :"20-3-3034",
        "resultLink":"",
        "isAnswerKey":false,
        "answerKeyDate":"20-3-3034",
        "anserKeypdfLink": "",
         
        },
        {
          "id" :3,
          "post_advertisment_no":'BA1234567',
          "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
          "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
          "post_publish_date": '02-02-2022',
          "post_closed_date": '02-07-2022',
          "post_closed_date_extended": '02-08-2022',
          "isActive":true,
          "post_location":'nanded',
          "post_fees":500,
          "post_exam_date":'20-12-2023',
          "post_official_website":'www.google.com',
           "isResult":false,
           "resultDate" :"20-3-3034",
           "resultLink":"",
           "isAnswerKey":true,
           "answerKeyDate":"20-3-3034",
           "anserKeypdfLink": "",
           
          },
          {
            "id" :4,
            "post_advertisment_no":'BA1234567',
            "post_name": 'THDCIL Recruitment 2022  THDCIL Recruitment 2022 THDCIL Recruitment 2022',
            "post_short_details":'CG Indian Coast Guard, Indian Coast Gu',
            "post_publish_date": '02-02-2022',
            "post_closed_date": '02-07-2022',
            "post_closed_date_extended": '02-08-2022',
            "isActive":true,
            "post_location":'aurangabad',
            "post_fees":500,
            "post_exam_date":'20-12-2023',
            "post_official_website":'www.google.com',
             "isResult":true,
             "resultDate" :"20-3-3034",
             "resultLink":"",
             "isAnswerKey":true,
             "answerKeyDate":"20-3-3034",
             "anserKeypdfLink": "",
             
            },
  ]

  url:any
  GetMainWall(){
    this.url = "https://jsonplaceholder.typicode.com/posts"

    return this.http.get(this.url);  }

}
