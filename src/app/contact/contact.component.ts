import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'pb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  username:string;
  email:string;
  description:string


  constructor(private _dataService: DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  successfulFeedbackSent(){
    this.toastr.success('Feedback Sent Successfully','Success');
  }

  emptyDetails(){
    this.toastr.warning('Please enter all the fields','Warning');
  }

  sendFeedback(){
    let record = {};

    record['username'] = this.username;
    record['email'] = this.email;
    record['description'] = this.description;
    if(!this.username || !this.email || !this.email){
      this.emptyDetails();
      return;
    }else{
    this._dataService.addFeedbackData(record)
    .subscribe(data =>{
      console.log(data);
      this.username = null;
      this.email = null;
      this.description = "";   
      this.successfulFeedbackSent();
      //this.locationreload();  
    })  
  }
}

  locationreload() {          
    location.reload();    
  }
}
