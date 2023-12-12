import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'pb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username:string;
  password:string;
  email:string

  public userData = [];

  
  constructor(private http:HttpClient,private router:Router,public _dataService: DataService, private toastr: ToastrService) { 
    // this._dataService.getUserData()
    // .subscribe((res:any)=>{
    //   //console.log(res);
    //   res.forEach(element => {
    //     //console.log(element)
    //     this.userData.push(element)        
    //   });
    // })
  }

  ngOnInit(): void {
  }

  // getValues(val){
  //   console.log(val);
  // }

  triggertoast(){
    this.toastr.error('some message');
  }

  duplicateUserName(){
    this.toastr.warning('User already exists. Please proceed to login. If not set a new username','Existing User?');
  }

  createSuccessfull(){
    this.toastr.success('User creation successful. Login with these credentials','Success');
  }

  incompleteDetails(){
    this.toastr.warning('Please enter all the fields','Warning');
  }

  duplicateCheck(){
    let record = {};
    record['username'] = this.username;
    record['password'] = this.password;    
    record['email'] = this.email;
    console.log(this.userData);
    for(let i=0;i<this.userData.length;i++){
      if(this.userData[i].username == this.username){
        console.log("There exists a user with same username");
        this.duplicateUserName();
        return;
      }
    }

    this.registrationProcess();
  }

  registrationProcess(){
    //this.duplicateCheck();
    let record = {};
    record['username'] = this.username;
    record['password'] = this.password;    
    record['email'] = this.email;
      if(!this.username || !this.password || !this.email){
        this.incompleteDetails();
        return;
      }else{
      this._dataService.userSignUp(record)
        .subscribe(res =>{
          this.username = "";
          this.password = "";
          this.email = "";
          this.createSuccessfull();
          this.router.navigate(['/login']);
        },
        err =>{
          this.duplicateUserName();
        })
    }    
  }
}
