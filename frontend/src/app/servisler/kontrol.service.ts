import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KontrolService {

  constructor() { }
  kontrolSignup(user) {
    if(user.ad == undefined ||
       user.soyad == undefined ||
       user.email == undefined ||
       user.kullaniciAdi == undefined ||
       user.sifre == undefined )

         {
         return false;
       } else {
         return true;
       }
  }

  kontrolKullaniciEkle(user) {
    if(user.ad == undefined ||
       user.soyad == undefined ||
       user.email == undefined ||
       user.kullaniciAdi == undefined ||
       user.sifre == undefined )

         {
         return false;
       } else {
         return true;
       }
  }

  kontrolYoneticiEkle(admin) {
    if(admin.ad == undefined ||
       admin.soyad == undefined ||
       admin.email == undefined ||
       admin.YoneticiKullaniciAdi == undefined ||
       admin.sifre == undefined )

         {
         return false;
       } else {
         return true;
       }
  }

  kontrolEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
