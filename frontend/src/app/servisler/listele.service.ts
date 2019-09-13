import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListeleService {

  constructor(private http: Http) { }

  KullanicilarListesi() {
    
    return this.http.get('http://localhost:8000/kullanicilarlistesi')
      .pipe(map(res => res.json()));
  }
  YoneticilerListesi() {
    
    return this.http.get('http://localhost:8000/yoneticilerlistesi')
      .pipe(map(res => res.json()));
  }
}
