import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KontrolService } from '../../servisler/kontrol.service';
import { EkleService } from '../../servisler/ekle.service';


@Component({
  selector: 'app-kullaniciekle',
  templateUrl: './kullaniciekle.component.html',
  styleUrls: ['./kullaniciekle.component.css']
})
export class KullaniciekleComponent implements OnInit {
  ad:String;
  soyad:String;
  email:String;
  kullaniciAdi:String;
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
   
    const user = {
      ad: this.ad,
      soyad: this.soyad,
      email: this.email,
      kullaniciAdi: this.kullaniciAdi,
      sifre:this.sifre
  }
  if(!this.kontrolService.kontrolKullaniciEkle(user)){
    this.flashMessage.show('Lütfen tüm alanları doldurunuz', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }

  // Validate Email
  if(!this.kontrolService.kontrolEmail(user.email)){
    this.flashMessage.show('Lütfen geçerli bir email adresi giriniz', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }

  this.ekleService.KullaniciEkle(user).subscribe(data => {
    if(data.success) {
      this.flashMessage.show('Kullanıcı başarılı bir şekilde eklendi', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/adminpanel']);
    }else {
      this.flashMessage.show('Hata', {cssClass: 'alert-danger', timeout: 3000});
      location.reload();
    }
  });
}


}
