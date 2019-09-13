import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GirisService {

  constructor(private http: Http) { }

  
  KullaniciLogin(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/login', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  AdminLogin(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/adminlogin', admin, {headers: headers})
      .pipe(map(res => res.json()));
  }
}
