import { Component, OnInit } from '@angular/core';
import { YetkilendirmeService } from '../../servisler/yetkilendirme.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { GirisService } from '../../servisler/giris.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  kullaniciAdi:String;
  sifre:String;
  
  constructor(
    private yetkilendirmeService: YetkilendirmeService,
    private girisService: GirisService,
    private router: Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }


  onLoginSubmit() {
   
    const user = {
      kullaniciAdi: this.kullaniciAdi,
      sifre: this.sifre
    }

    this.girisService.KullaniciLogin(user).subscribe(data => {
      if(data.success) {
        
        this.yetkilendirmeService.storeUserData(data.token, data.user);
        this.flashMessage.show('Giriş yapıldı', {cssClass: 'alert-success', timeout:3000});
         this.router.navigate(['kullanicipanel']);
      }
      else {
        
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout:30000});
         location.reload();
      }
    });
    }
}
