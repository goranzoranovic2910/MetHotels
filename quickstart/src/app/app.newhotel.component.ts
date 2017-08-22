import { Component, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Hotel } from './app.hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newhotel',
  template: `<h3>{{name}}</h3>
            <form (submit)="dodajHotel()">

              <div id="idhotel">
                 <label for="idHotela">ID Hotela : </label>
                 <input type="text" [(ngModel)]="noviHotel.id" name="idHotela">
              </div>

              <div id="ime">
                 <label for="ime">Ime hotela:</label>
                 <input type="text" [(ngModel)]="noviHotel.ime" name="ime">
              </div>
              <br>

              <input type="submit" value="Dodaj!" />

            </form>
  `
})

export class NewHotelComponent {
   name = 'Dodavanje hotela';
   noviHotel:Hotel;

    constructor(private http: Http, private router:Router){
      this.noviHotel = { id:0, ime:"" };
    }

    dodajHotel(){

      let bodyString = JSON.stringify(this.noviHotel);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/it255/methotels/insertHotel.php", bodyString, options)
                              .map((res:Response) => res.json())
                              .subscribe(response => {
                                console.log(response);
                                if(response.result=="success"){
                                  console.log(this.router);
                                  this.router.navigate(['/pretraga']);

                                }
                                else{
                                  console.log("Error!");
                                  alert(response);
                                }
                              });

    }

}
