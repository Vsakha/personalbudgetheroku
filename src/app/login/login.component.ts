import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import {GlobalConstants} from '../app.global';
import { Subject } from 'rxjs';
@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userData = [];
  username:string
  password:string
  isUserLoggedIn = new Subject<boolean>();

  constructor(private router: Router,public _dataService: DataService,private toastr: ToastrService) {
    this.isUserLoggedIn.next(false);      
   }

  ngOnInit(): void {
  }

  getValues(val){
    console.log(val);
  }

  signuppage(){
    this.router.navigate(['/signup']);
  }

  loginSuccessful(){
    this.toastr.success('Logged In','Success');
  }

  loginFailure(){
    this.toastr.error('Invalid Credentials. Please enter valid credentials','Failure');
  }

  enterAllDetails(){
    this.toastr.warning('Please enter all the details','Warning');
  }

  userValidationFailed(){
    this.toastr.error("Invalid Credentials","Error");
  }

  homepage(){
    let record = {};
    record['username'] = this.username;
    record['password'] = this.password;
    if(!this.username || !this.password){
      console.log("UserName or password is missing");
      this.enterAllDetails();
    }else{
      this._dataService.userLogin(record)          
    }
  }

}
