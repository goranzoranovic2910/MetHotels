import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PretragaComponent } from './app.pretraga.component';
import { NewRoomComponent }  from './app.newroom.component';
import { NewHotelComponent }  from './app.newhotel.component';
import { LoginComponent } from './app.login';
import { RegisterComponent } from './app.register';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterSobaPipe } from './filter.sobe';
import { RouterModule } from '@angular/router';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports:[ BrowserModule,
    HttpModule,
    FormsModule,
    CookieModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path:'',
          redirectTo:'/pretraga',
          pathMatch:'full'
        },
        {
          path:'pretraga',
          component:PretragaComponent
        },
        {
          path:'newroom',
          component:NewRoomComponent
        },
        {
          path:'newhotel',
          component:NewHotelComponent
        },
        {
          path:'login',
          component:LoginComponent
        },
        {
          path:'register',
          component:RegisterComponent
        },
      ]
    ) ],
  declarations: [ AppComponent, FilterSobaPipe, NewRoomComponent, PretragaComponent, NewHotelComponent, LoginComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ]
})
export class AppModule { }
