import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { FilterSobaPipe } from './filter.sobe';
import { Soba } from './app.soba';

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

            <ul>
              <li *ngFor="let soba of sobe | filterSoba:brojKreveta:brojKvadrata">
                <h3>Soba:{{soba.broj_sobe}}</h3>
                <p>Broj kreveta:{{soba.broj_kreveta}}</p>
                <p>Broj kvadrata:{{soba.broj_kvadrata}}</p>
              </li>
            </ul>
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
      .subscribe(sveSobe => {this.sobe = sveSobe; console.log(this.sobe);});
    }

}
