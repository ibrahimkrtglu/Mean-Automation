import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SilService {

  constructor(private http: Http) { }

  KullaniciSilSayfa() {
    
    return this.http.get('http://localhost:8000/kullanicisil')
      .pipe(map(res => res.json()));
  }

  YoneticiSilSayfa() {
    
    return this.http.get('http://localhost:8000/yoneticisil')
      .pipe(map(res => res.json()));
  }

  KullaniciSil(kullaniciAdi) {
   
    return this.http.delete('http://localhost:8000/kullanicisil/sil/' + kullaniciAdi)
      .pipe(map(res => res.json()));
  }

  YoneticiSil(YoneticiKullaniciAdi) {
   
    return this.http.delete('http://localhost:8000/yoneticisil/sil/' + YoneticiKullaniciAdi)
      .pipe(map(res => res.json()));
  }
}
