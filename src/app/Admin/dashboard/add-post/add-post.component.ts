import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  error: boolean | undefined;

  constructor() { }
  pageTitile="New Post Register"

  NewPostRegistration: FormGroup = new FormGroup({
    post_advertisment_no: new FormControl(),
    post_name: new FormControl(),
    post_department: new FormControl(),
    post_type: new FormControl(),
    post_details: new FormControl(),
    post_short_details: new FormControl(),
    post_exam_date: new FormControl(),
    post_publish_date: new FormControl(),
    post_closed_date: new FormControl(),
    post_closed_date_extended: new FormControl(),
  });
  submit() {
    if (this.NewPostRegistration.valid) {
      this.error= true
    }
    console.log(this.NewPostRegistration.value, "NewPostRegistration");
    
   
  }

  ngOnInit(): void {
  }

}
