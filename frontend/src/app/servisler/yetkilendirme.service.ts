import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class YetkilendirmeService{
  authToken: any;
  user: any;
  admin:any;
  
  constructor(private http: Http) { }

   storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    
      const isExpired = !helper.isTokenExpired(localStorage.getItem('id_token'));
      
      return isExpired;
    }


  logout() {
    this.authToken = null;
    this.user = null;
    this.admin = null;
    localStorage.clear();
  }

  storeAdminData(token, admin) {
    localStorage.setItem('admin_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.admin =admin ;
  }

  loadAdminToken() {
    const token = localStorage.getItem('admin_token');
    this.authToken = token;
  }

  loggedAdminIn(){
      const isExpired = !helper.isTokenExpired(localStorage.getItem('admin_token'));
      return isExpired;
    }


  
  

  

  
}