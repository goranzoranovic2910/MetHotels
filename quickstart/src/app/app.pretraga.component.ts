import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { FilterSobaPipe } from './filter.sobe';
import { Soba } from './app.soba';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pretraga',
  template: `<h3>{{name}}</h3>

            <div id="kreveti">
               <label for="brojKreveta">Br. kreveta:</label>
               <input type="text" [(ngModel)]="brojKreveta" name="brojKreveta">
            </div>
            <br>
            <div id="kvadrati">
               <label for="brojKvadrata">Br. kvadrata:</label>
               <input type="text" [(ngModel)]="brojKvadrata" name="brojKvadrata">
            </div>

            <div>
              <table id="tabelaSobe" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Broj sobe</th>
                        <th>Broj kreveta</th>
                        <th>Broj kvadrata</th>
                        <th>Izmena</th>
                        <th>Brisanje</th>
                    </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let soba of sobe | filterSoba:brojKreveta:brojKvadrata">
                    <td>{{soba.broj_sobe}}</td>
                    <td>{{soba.broj_kreveta}}</td>
                    <td>{{soba.broj_kvadrata}}</td>
                    <td><a routerLink="/updateRoom/{{soba.broj_sobe}}">Izmeni</a></td>
                    <td><a routerLink="/deleteRoom/{{soba.broj_sobe}}">Obrisi</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
  `
})

export class PretragaComponent implements OnInit  {
   name = 'Pretraga';
   sobe: Soba[];

    constructor(private http: Http){
    }

    ngOnInit(){
      this.http.get('http://localhost/it255/methotels/pretragaSoba.php')
      .map(response =>  response.json())
      .subscribe(sveSobe => {
        this.sobe = sveSobe; console.log(this.sobe);
      });

      $('#tabelaSobe').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false //vec implementirano sa Angular filterom
    });
      console.log("Inicijalizovana tabela...");
    }

}
