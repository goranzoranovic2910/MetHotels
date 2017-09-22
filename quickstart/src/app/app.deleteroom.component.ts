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
  selector: 'app-deleteroom',
  template: `<h3>{{name}}</h3>
            <form (submit)="obrisiSobu()">

              <p>Da li ste sigurni d zelite da obrisete sobu {{soba.broj_sobe}} ?</p>

              <input type="submit" value="Obrisi!" />

            </form>
  `
})

export class DeleteRoomComponent {
   name = 'Brisanje sobe';
   soba:Soba;
   hoteli:Hotel[];

    constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
      this.soba = { broj_sobe:0, broj_kreveta:0, broj_kvadrata:0, id_hotel:1 };

      this.activatedRoute.params.subscribe(params =>
        this.http.get('http://localhost/it255/methotels/getSoba.php?broj_sobe='+params['broj_sobe'])
        .map(response =>response.json())
        .subscribe(result => {this.soba = result; console.log(this.soba);}));
    }

    obrisiSobu(){
      var select = <HTMLSelectElement>document.getElementById("hoteliSelect");
      let bodyString = JSON.stringify(this.soba);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/it255/methotels/deleteSoba.php", bodyString, options)
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
