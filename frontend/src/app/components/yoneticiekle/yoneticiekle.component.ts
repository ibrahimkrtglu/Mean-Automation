import { Component, OnInit } from '@angular/core';
import { EkleService } from '../../servisler/ekle.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KontrolService } from '../../servisler/kontrol.service';

@Component({
  selector: 'app-yoneticiekle',
  templateUrl: './yoneticiekle.component.html',
  styleUrls: ['./yoneticiekle.component.css']
})
export class YoneticiekleComponent implements OnInit {
  ad:String;
  soyad:String;
  email:String;
  YoneticiKullaniciAdi:String;
  sifre:String;
  constructor(
    private ekleService:EkleService,
    private flashMessage:FlashMessagesService,
    private router: Router,
    private kontrolService:KontrolService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
   
    const admin = {
      ad: this.ad,
      soyad: this.soyad,
      email: this.email,
      YoneticiKullaniciAdi: this.YoneticiKullaniciAdi,
      sifre:this.sifre
  }

  if(!this.kontrolService.kontrolYoneticiEkle(admin)){
    this.flashMessage.show('Lütfen tüm alanları doldurunuz', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }

  // Validate Email
  if(!this.kontrolService.kontrolEmail(admin.email)){
    this.flashMessage.show('Lütfen geçerli bir email adresi giriniz', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }

  this.ekleService.YoneticiEkle(admin).subscribe(data => {
    if(data.success) {
      this.flashMessage.show('Yonetici başarılı bir şekilde eklendi', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/adminpanel']);
    }else {
      this.flashMessage.show('Hata', {cssClass: 'alert-danger', timeout: 3000});
      location.reload();
    }
  });
}
}