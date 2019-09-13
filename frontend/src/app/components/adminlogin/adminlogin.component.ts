import { Component, OnInit } from '@angular/core';
import { YetkilendirmeService } from '../../servisler/yetkilendirme.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { GirisService } from '../../servisler/giris.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  YoneticiKullaniciAdi:String;
  sifre:String;
  constructor(
    private yetkilendirmeService: YetkilendirmeService,
    private girisService: GirisService,
    private router: Router,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    
    const admin = {
    YoneticiKullaniciAdi: this.YoneticiKullaniciAdi,
    sifre: this.sifre
    }
    this.girisService.AdminLogin(admin).subscribe(data => {
      if(data.success) {
        this.yetkilendirmeService.storeAdminData(data.token, data.admin);
        this.flashMessage.show('Giriş yapıldı', {cssClass: 'alert-success', timeout:3000});
         this.router.navigate(['adminpanel']);
      }else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout:3000});
         location.reload();
      }
    });
}

}