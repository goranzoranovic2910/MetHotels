"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var ngx_cookie_1 = require("ngx-cookie");
var LoginComponent = (function () {
    function LoginComponent(http, router, cookieService) {
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        this.name = 'Ulogujte se';
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var bodyString = JSON.stringify({ username: this.username, password: this.password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://localhost/it255/methotels/login.php", bodyString, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.result == "true") {
                _this.cookieService.put('CurrentUser', _this.username);
                _this.router.navigate(['/pretraga']);
            }
            else {
                alert(JSON.stringify(response));
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: "<h3>{{name}}</h3>\n            <form (submit)=\"login()\">\n\n            \t\t\t\t<div class=\"form-group\">\n            \t\t\t\t  <label for=\"uname\">Korisnicko ime:</label>\n            \t\t\t\t\t<input type=\"text\" name=\"uname\" [(ngModel)]=\"username\" class=\"form-control\"/>\n            \t\t\t\t</div>\n\n            \t\t\t\t<div class=\"form-group\">\n            \t\t\t\t  <label for=\"pword\">Sifra:</label>\n            \t\t\t\t  <input type=\"password\" name=\"pword\" [(ngModel)]=\"password\" class=\"form-control\"/>\n            \t\t\t\t</div>\n\n            \t\t\t\t<input type=\"submit\" value=\"Uloguj se\"/>\n            </form>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, ngx_cookie_1.CookieService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=app.login.js.map