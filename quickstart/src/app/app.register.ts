import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  template: `<h3>{{name}}</h3>
            <form (submit)="register()">

      			<div class="form-group">
      			  <label for="ime">Ime:</label>
      			  <input type="text" name="ime" id="ime" [(ngModel)]="ime" class="form-control"/>
      			</div>

      			<div class="form-group">
      			  <label for="prezime">Prezime:</label>
      			  <input type="text" name="prezime" id="prezime" [(ngModel)]="prezime" class="form-control"/>
      			</div>

      			<div class="form-group">
      			  <label for="username">Korisnicko ime:</label>
      				<input type="text" name="username"  class="form-control"  [(ngModel)]="username"/>
      			</div>

      			<div class="form-group">
      			  <label for="password">Sifra:</label>
      			  <input type="password" name="password"  class="form-control"  [(ngModel)]="password"/>
      			</div>

      			<input type="submit" name="submit" value="Registrujte nalog"/>
      			</form>
  `
})
export class RegisterComponent{
   name = 'Registrujte se';
   ime = '';
   prezime = '';
   username='';
   password='';

    constructor(private http: Http, private router:Router){

    }

    register(){
      let bodyString = JSON.stringify({ ime:this.ime, prezime:this.prezime, username:this.username, password:this.password});
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/it255/methotels/insertUser.php", bodyString, options)
                              .map((res:Response) => res.json())
                              .subscribe(response => {
                                if(response.result=="success"){
                                  this.router.navigate(['/pretraga']);
                                }
                                else{
                                  alert(JSON.stringify(response));
                                }

                              });
    }

}
