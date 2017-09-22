import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Soba } from './app.soba';
import { Router } from '@angular/router';
import { Hotel } from './app.hotel';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-updateroom',
  template: `<h3>{{name}}</h3>
            <form (submit)="izmeniSobu()">

              <div id="broj">
                 <label for="brojKreveta">Broj sobe : </label>
                 <input type="text" [(ngModel)]="soba.broj_sobe" name="brojSobe">
              </div>

              <div id="kreveti">
                 <label for="brojKreveta">Br. kreveta:</label>
                 <input type="text" [(ngModel)]="soba.broj_kreveta" name="brojKreveta">
              </div>
              <br>
              <div id="kvadrati">
                 <label for="brojKvadrata">Br. kvadrata:</label>
                 <input type="text" [(ngModel)]="soba.broj_kvadrata" name="brojKvadrata">
              </div>

              <div id="hoteliDiv">
               <label for="hoteliSelect">Hotel:</label>
                <select id="hoteliSelect">
                  <option *ngFor="let hotel of hoteli" value={{hotel.id}}>
                    {{hotel.ime}}
                  </option>
                </select>
              </div>

              <input type="submit" value="Izmeni!" />

            </form>
  `
})

export class UpdateRoomComponent implements OnInit {
   name = 'Izmena sobe';
   soba:Soba;
   hoteli:Hotel[];

    constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
      this.soba = { broj_sobe:0, broj_kreveta:0, broj_kvadrata:0, id_hotel:1 };

      this.activatedRoute.params.subscribe(params =>
        this.http.get('http://localhost/it255/methotels/getSoba.php?broj_sobe='+params['broj_sobe'])
        .map(response =>response.json())
        .subscribe(result => {this.soba = result; console.log(this.soba);}));
    }

    ngOnInit(){
      this.http.get('http://localhost/it255/methotels/getHotels.php')
      .map(response =>response.json())
      .subscribe(sviHoteli => {this.hoteli = sviHoteli; console.log(this.hoteli);});
    }

    izmeniSobu(){
      var select = <HTMLSelectElement>document.getElementById("hoteliSelect");
      this.soba.id_hotel = Number(select.options[select.selectedIndex].value);
      let bodyString = JSON.stringify(this.soba);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/it255/methotels/updateSoba.php", bodyString, options)
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
