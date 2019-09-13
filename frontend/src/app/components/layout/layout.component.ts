import { Component, OnInit } from '@angular/core';
import { YetkilendirmeService } from '../../servisler/yetkilendirme.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private yetkilendirmeService:YetkilendirmeService,
    private router:Router,
    private flashMessage:FlashMessagesService

  ) { }

  ngOnInit() {
  }

onLogoutClick(){
  this.yetkilendirmeService.logout();
  this.flashMessage.show('Çıkış yaptınız',{
    cssClass:'alert-success',
    timeout:3000
  });
  this.router.navigate(['/login']);
  return false;
}

}
