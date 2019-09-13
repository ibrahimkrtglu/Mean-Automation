import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { KullaniciekleComponent } from './components/kullaniciekle/kullaniciekle.component';
import { KullanicilarlistesiComponent } from './components/kullanicilarlistesi/kullanicilarlistesi.component';
import { KullanicipanelComponent } from './components/kullanicipanel/kullanicipanel.component';
import { KullanicisilComponent } from './components/kullanicisil/kullanicisil.component';
import { YoneticiekleComponent } from './components/yoneticiekle/yoneticiekle.component';
import { YoneticilerlistesiComponent } from './components/yoneticilerlistesi/yoneticilerlistesi.component';
import { YoneticisilComponent } from './components/yoneticisil/yoneticisil.component';
import { HttpClientModule } from '@angular/common/http';
import { KullaniciGuardGuard } from './servisler/kullanici-guard.guard'
import { YoneticiGuardGuard } from './servisler/yonetici-guard.guard'
import { MasterGuardGuard } from './servisler/master-guard.guard'

import { FlashMessagesModule } from 'angular2-flash-messages';
import { YetkilendirmeService } from './servisler/yetkilendirme.service';
import {EkleService } from './servisler/ekle.service';
import { GirisService } from './servisler/giris.service';
import { ListeleService } from './servisler/listele.service';
import { SilService } from './servisler/sil.service';

import { KontrolService } from './servisler/kontrol.service';


const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'adminpanel',component:AdminpanelComponent, canActivate:[YoneticiGuardGuard]},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'kullaniciekle',component:KullaniciekleComponent, canActivate:[YoneticiGuardGuard]},
  {path:'kullanicilarlistesi',component:KullanicilarlistesiComponent, canActivate:[MasterGuardGuard]},
  {path:'kullanicipanel',component:KullanicipanelComponent, canActivate:[KullaniciGuardGuard]},
  {path:'kullanicisil',component:KullanicisilComponent, canActivate:[YoneticiGuardGuard]},
  {path:'yoneticiekle',component:YoneticiekleComponent, canActivate:[YoneticiGuardGuard]},
  {path:'yoneticilerlistesi',component:YoneticilerlistesiComponent, canActivate:[YoneticiGuardGuard]},
  {path:'yoneticisil',component:YoneticisilComponent, canActivate:[YoneticiGuardGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminpanelComponent,
    AdminloginComponent,
    KullaniciekleComponent,
    KullanicilarlistesiComponent,
    KullanicipanelComponent,
    KullanicisilComponent,
    YoneticiekleComponent,
    YoneticilerlistesiComponent,
    YoneticisilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [YetkilendirmeService,KontrolService,KullaniciGuardGuard,YoneticiGuardGuard,MasterGuardGuard,EkleService,SilService,ListeleService,GirisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
