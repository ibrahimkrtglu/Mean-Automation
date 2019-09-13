import { Component, OnInit } from '@angular/core';
import { ListeleService } from '../../servisler/listele.service';


@Component({
  selector: 'app-yoneticilerlistesi',
  templateUrl: './yoneticilerlistesi.component.html',
  styleUrls: ['./yoneticilerlistesi.component.css']
})



export class YoneticilerlistesiComponent implements OnInit {
  ad=[];
  soyad=[]
  email=[];
  YoneticiKullaniciAdi=[];


  constructor(private listeleService: ListeleService) { }

  
  listele(){
    this.listeleService.YoneticilerListesi().subscribe(data => {
      for(let i in data.yoneticiler){ 
       
        this.ad.push(data.yoneticiler[i].ad);
        this.soyad.push(data.yoneticiler[i].soyad);
        this.email.push(data.yoneticiler[i].email);
        this.YoneticiKullaniciAdi.push(data.yoneticiler[i].YoneticiKullaniciAdi);
        
    }
      
      
     
    });
    }

  ngOnInit() {
    this.listele();
  }

}
