import { Component, OnInit } from '@angular/core';
import { SilService } from '../../servisler/sil.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-yoneticisil',
  templateUrl: './yoneticisil.component.html',
  styleUrls: ['./yoneticisil.component.css']
})



export class YoneticisilComponent implements OnInit {
  ad=[];
  soyad=[]
  email=[];
  YoneticiKullaniciAdi=[]; 


  constructor(private silService: SilService,
    private router: Router,
    private flashMessage:FlashMessagesService) { }


    goruntule(){
      this.silService.YoneticiSilSayfa().subscribe(data => {
        for(let i in data.yoneticiler){ 
         
          this.ad.push(data.yoneticiler[i].ad);
          this.soyad.push(data.yoneticiler[i].soyad);
          this.email.push(data.yoneticiler[i].email);
          this.YoneticiKullaniciAdi.push(data.yoneticiler[i].YoneticiKullaniciAdi);
          
      }});
      }


  ngOnInit() {
    this.goruntule();
  }


  sil(i){

    this.silService.YoneticiSil(this.YoneticiKullaniciAdi[i]).subscribe(data =>{
     if(data.success) {
       this.flashMessage.show('Yönetici başarılı bir şekilde silindi', {cssClass: 'alert-success', timeout:5000});
       location.reload();
     }
     else {
       this.flashMessage.show('Yönetici Silinemedi', {cssClass: 'alert-danger', timeout:5000});
        location.reload();
     }
    });
   }

}
