import { Component, OnInit } from '@angular/core';
import { SilService } from '../../servisler/sil.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-kullanicisil',
  templateUrl: './kullanicisil.component.html',
  styleUrls: ['./kullanicisil.component.css']
})


export class KullanicisilComponent implements OnInit {
  ad=[];
  soyad=[]
  email=[];
  kullaniciadi=[]; 


  constructor(private silService: SilService,
  private router: Router,
  private flashMessage:FlashMessagesService) { }


  goruntule(){
    this.silService.KullaniciSilSayfa().subscribe(data => {
      for(let i in data.kullanicilar){ 
       
        this.ad.push(data.kullanicilar[i].ad);
        this.soyad.push(data.kullanicilar[i].soyad);
        this.email.push(data.kullanicilar[i].email);
        this.kullaniciadi.push(data.kullanicilar[i].kullaniciAdi);
        
    }
      
      
    
    });
    }


  ngOnInit() {
    this.goruntule();
  }

  sil(i){

   this.silService.KullaniciSil(this.kullaniciadi[i]).subscribe(data =>{
    if(data.success) {
      this.flashMessage.show('Kullanıcı başarılı bir şekilde silindi', {cssClass: 'alert-success', timeout:5000});
      location.reload();
    }
    else {
      this.flashMessage.show('Hata', {cssClass: 'alert-danger', timeout:5000});
       location.reload();
    }
   });
  }
}
