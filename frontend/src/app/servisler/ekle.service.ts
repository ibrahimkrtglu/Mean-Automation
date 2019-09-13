import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class EkleService {

  user:any;
  admin:any;

  constructor(private http: Http) { }


  SignUp(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/signup', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  KullaniciEkle(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/signup', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  YoneticiEkle(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/yoneticiekle', admin, {headers: headers})
      .pipe(map(res => res.json()));
  }
}
