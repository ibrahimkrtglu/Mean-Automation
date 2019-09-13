import { Component, OnInit } from '@angular/core';
import { ListeleService } from '../../servisler/listele.service';



@Component({
  selector: 'app-kullanicilarlistesi',
  templateUrl: './kullanicilarlistesi.component.html',
  styleUrls: ['./kullanicilarlistesi.component.css']
})


export class KullanicilarlistesiComponent implements OnInit {
  ad=[];
  soyad=[]
  email=[];
  kullaniciadi=[];

  
  constructor(private listeleService: ListeleService) { 
    
  }

  listele(){
    this.listeleService.KullanicilarListesi().subscribe(data => {
      for(let i in data.kullanicilar){ 
       
        this.ad.push(data.kullanicilar[i].ad);
        this.soyad.push(data.kullanicilar[i].soyad);
        this.email.push(data.kullanicilar[i].email);
        this.kullaniciadi.push(data.kullanicilar[i].kullaniciAdi);
        
    }
      
      
     
    });
    }

  ngOnInit() {
   this.listele();
  }
 
  
}