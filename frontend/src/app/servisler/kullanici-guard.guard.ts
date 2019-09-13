import { Injectable } from '@angular/core';
import { Router , CanActivate} from '@angular/router';
import {YetkilendirmeService } from './yetkilendirme.service';

@Injectable()



export class KullaniciGuardGuard implements CanActivate {
constructor(private yetkilendirmeService:YetkilendirmeService,private router:Router){

}

  canActivate(){
    if(this.yetkilendirmeService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

  }
  }

