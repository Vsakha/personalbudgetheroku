import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, Data, Router} from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _dataservice:DataService,private router:Router){

  }

  canActivate():boolean{
    if(this._dataservice.verifyTokenPresence()){      
      return true
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
