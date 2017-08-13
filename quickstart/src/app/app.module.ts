import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterSobaPipe} from './filter.sobe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, FilterSobaPipe ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
