import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  template: `<h3>{{name}}</h3>
            <form (submit)="login()">

            				<div class="form-group">
            				  <label for="uname">Korisnicko ime:</label>
            					<input type="text" name="uname" [(ngModel)]="username" class="form-control"/>
            				</div>

            				<div class="form-group">
            				  <label for="pword">Sifra:</label>
            				  <input type="password" name="pword" [(ngModel)]="password" class="form-control"/>
            				</div>

            				<input type="submit" value="Uloguj se"/>
            </form>
  `
})
export class LoginComponent{
   name = 'Ulogujte se';
   username='';
   password='';

    constructor(private http: Http, private router:Router, private cookieService:CookieService){

    }

    login(){
      let bodyString = JSON.stringify({ username:this.username, password:this.password});
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/it255/methotels/login.php", bodyString, options)
                              .map((res:Response) => res.json())
                              .subscribe(response => {
                                console.log(response);
                                if(response.result=="true"){
                                  this.cookieService.put('CurrentUser', this.username);
                                  this.router.navigate(['/pretraga']);

                                }
                                else{
                                  alert(JSON.stringify(response));
                                }

                              });
    }

}
