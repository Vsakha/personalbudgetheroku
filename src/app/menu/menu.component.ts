import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../app.global';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'pb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isUserLoggedIn = false;

  constructor(public _dataService: DataService,public router:Router,private toastr:ToastrService) {    
    
   }

  ngOnInit(): void {
    this._dataService.getLoginStatus().subscribe(status => this.isUserLoggedIn = status);
  }

  successfulLogout(){
    this.toastr.success("You have logged out successfully","Goodbye!");
  }

  logoutUser(){
    this.isUserLoggedIn = false;
    this.router.navigate(['/login']);
    this._dataService.logout();
    this.successfulLogout();
  }

}
