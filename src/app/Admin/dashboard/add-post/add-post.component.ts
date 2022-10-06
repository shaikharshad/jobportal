import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  error: boolean | undefined;

  constructor() { }
  pageTitile="New Post Register"
  outputDateFormat = 'MM-DD-yyyy';

  NewPostRegistration: FormGroup = new FormGroup({
    post_advertisment_no: new FormControl('',[Validators.required, Validators.minLength(5)]),
    post_name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    post_department: new FormControl(),
    post_type: new FormControl(),
    post_details: new FormControl('',[Validators.required, Validators.minLength(5)]),
    post_short_details: new FormControl('',[Validators.required, Validators.minLength(5)]),
    post_exam_date: new FormControl(),
    post_publish_date: new FormControl(),
    post_closed_date: new FormControl(),
    post_closed_date_extended: new FormControl(),     
    post_no_of_post: new FormControl(), 
    post_age_req: new FormControl(), 
    post_open_fees: new FormControl(), 
    post_other_fees: new FormControl(), 
    post_obc_fees: new FormControl(), 
    post_location: new FormControl(), 
    isActive: new FormControl(), 
    isNew: new FormControl()  ,
    post_pdf_document: new FormControl(), 
    post_official_website: new FormControl(), 

  });
  submit() {
    if (this.NewPostRegistration.valid) {
      this.error= true
    }
    // Date formate
    function formatDate(date: string | number | Date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
  }
   
   const post_publish_dateTemp = formatDate(this.NewPostRegistration.value.post_publish_date);
   const post_exam_datetemp = formatDate(this.NewPostRegistration.value.post_exam_date);
   const post_closed_datetemp = formatDate(this.NewPostRegistration.value.post_closed_date);
   const post_closed_date_extendedtemp = formatDate(this.NewPostRegistration.value.post_closed_date_extended);

   this.NewPostRegistration.patchValue({
    post_publish_date :post_publish_dateTemp,
    post_exam_date :post_exam_datetemp,
    post_closed_date :post_closed_datetemp,
    post_closed_date_extended :post_closed_date_extendedtemp,

    })

  //  =================================


    console.log(this.NewPostRegistration.value, "NewPostRegistration");
    
   
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.NewPostRegistration.controls[controlName].hasError(errorName);
  }
  ngOnInit(): void {
  }

}
