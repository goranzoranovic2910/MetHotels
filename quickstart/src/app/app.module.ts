import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PretragaComponent } from './app.pretraga.component';
import { NewRoomComponent }  from './app.newroom.component';
import { NewHotelComponent }  from './app.newhotel.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterSobaPipe } from './filter.sobe';
import { RouterModule } from '@angular/router';
@NgModule({
  imports:[ BrowserModule,
    HttpModule,
    FormsModule,
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
      ]


    ) ],
  declarations: [ AppComponent, FilterSobaPipe, NewRoomComponent, PretragaComponent, NewHotelComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
