import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PretragaComponent } from './app.pretraga.component';
import { NewRoomComponent }  from './app.newroom.component';
import { NewHotelComponent }  from './app.newhotel.component';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
  <a routerLink="/pretraga">Pretraga</a>
  <a routerLink="/newroom">Dodaj sobu</a>
  <a routerLink="/newhotel">Dodaj hotel</a>
  <router-outlet></router-outlet>
  `
})

export class AppComponent  {
  name:string = "MetHotels";
  constructor(){
  }

}
