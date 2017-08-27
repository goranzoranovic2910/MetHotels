import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Soba } from './app.soba';
import { Router } from '@angular/router';
import { Hotel } from './app.hotel';

@Component({
  selector: 'app-newroom',
  template: `<h3>{{name}}</h3>
            <form (submit)="dodajSobu()">

              <div id="broj">
                 <label for="brojKreveta">Broj sobe : </label>
                 <input type="text" [(ngModel)]="novaSoba.broj_sobe" name="brojSobe">
              </div>

              <div id="kreveti">
                 <label for="brojKreveta">Br. kreveta:</label>
                 <input type="text" [(ngModel)]="novaSoba.broj_kreveta" name="brojKreveta">
              </div>
              <br>
              <div id="kvadrati">
                 <label for="brojKvadrata">Br. kvadrata:</label>
                 <input type="text" [(ngModel)]="novaSoba.broj_kvadrata" name="brojKvadrata">
              </div>

              <div id="hoteliDiv">
               <label for="hoteliSelect">Hotel:</label>
                <select id="hoteliSelect">
                  <option *ngFor="let hotel of hoteli" value={{hotel.id}}>
                    {{hotel.ime}}
                  </option>
                </select>
              </div>

              <input type="submit" value="Dodaj!" />

            </form>
  `
})

export class NewRoomComponent implements OnInit {
   name = 'Dodavanje sobe';
   novaSoba:Soba;
   hoteli:Hotel[];

    constructor(private http: Http, private router:Router){
      this.novaSoba = { broj_sobe:0, broj_kreveta:0, broj_kvadrata:0, id_hotel:1 };
    }

    ngOnInit(){
      this.http.get('http://localhost/it255/methotels/getHotels.php')
      .map(response =>response.json())
      .subscribe(sviHoteli => {this.hoteli = sviHoteli; console.log(this.hoteli);});
    }

    dodajSobu(){
      var select = <HTMLSelectElement>document.getElementById("hoteliSelect");
      this.novaSoba.id_hotel = Number(select.options[select.selectedIndex].value);
      let bodyString = JSON.stringify(this.novaSoba);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/it255/methotels/insertSoba.php", bodyString, options)
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
