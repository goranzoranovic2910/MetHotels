import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PretragaComponent } from './app.pretraga.component';
import { NewRoomComponent }  from './app.newroom.component';
import { UpdateRoomComponent } from './app.updateroom.component';
import { DeleteRoomComponent } from './app.deleteroom.component';
import { NewHotelComponent }  from './app.newhotel.component';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <a routerLink="/pretraga">Pretraga</a>
  <a routerLink="/newroom">Dodaj sobu</a>
  <a routerLink="/newhotel">Dodaj hotel</a>
  <div *ngIf="!userLoggedIn()">
    <a routerLink="/login">Uloguj se</a>
    <a routerLink="/register">Registruj se</a>
  </div>
  <div *ngIf="userLoggedIn()">
    <input type="button" (click)="logOut()" value="Log out"/>
  </div>
  <router-outlet></router-outlet>
  `
})

export class AppComponent  {
  name:string = "MetHotels";

  constructor(private cookieService:CookieService){
  }

  userLoggedIn(){
    return this.cookieService.get('CurrentUser') != null;
  }

  logOut(){
    this.cookieService.remove('CurrentUser');
  }

}
