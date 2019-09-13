import { Component, OnInit } from '@angular/core';
import { EkleService } from '../../servisler/ekle.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KontrolService } from '../../servisler/kontrol.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
  if(!this.kontrolService.kontrolSignup(user)){
    this.flashMessage.show('Lütfen tüm alanları doldurunuz', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }

  // Validate Email
  if(!this.kontrolService.kontrolEmail(user.email)){
    this.flashMessage.show('Lütfen geçerli bir email adresi giriniz', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }

  this.ekleService.SignUp(user).subscribe(data => {
    if(data.success) {
      this.flashMessage.show('Kayıt olundu giriş yapabilirsiniz', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login']);
    }else {
      this.flashMessage.show('Hata', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/signup']);
    }
  });
}

}