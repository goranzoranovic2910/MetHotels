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
var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.name = 'Registrujte se';
        this.ime = '';
        this.prezime = '';
        this.username = '';
        this.password = '';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var bodyString = JSON.stringify({ ime: this.ime, prezime: this.prezime, username: this.username, password: this.password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://localhost/it255/methotels/insertUser.php", bodyString, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.result == "success") {
                _this.router.navigate(['/pretraga']);
            }
            else {
                alert(JSON.stringify(response));
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: "<h3>{{name}}</h3>\n            <form (submit)=\"register()\">\n\n      \t\t\t<div class=\"form-group\">\n      \t\t\t  <label for=\"ime\">Ime:</label>\n      \t\t\t  <input type=\"text\" name=\"ime\" id=\"ime\" [(ngModel)]=\"ime\" class=\"form-control\"/>\n      \t\t\t</div>\n\n      \t\t\t<div class=\"form-group\">\n      \t\t\t  <label for=\"prezime\">Prezime:</label>\n      \t\t\t  <input type=\"text\" name=\"prezime\" id=\"prezime\" [(ngModel)]=\"prezime\" class=\"form-control\"/>\n      \t\t\t</div>\n\n      \t\t\t<div class=\"form-group\">\n      \t\t\t  <label for=\"username\">Korisnicko ime:</label>\n      \t\t\t\t<input type=\"text\" name=\"username\"  class=\"form-control\"  [(ngModel)]=\"username\"/>\n      \t\t\t</div>\n\n      \t\t\t<div class=\"form-group\">\n      \t\t\t  <label for=\"password\">Sifra:</label>\n      \t\t\t  <input type=\"password\" name=\"password\"  class=\"form-control\"  [(ngModel)]=\"password\"/>\n      \t\t\t</div>\n\n      \t\t\t<input type=\"submit\" name=\"submit\" value=\"Registrujte nalog\"/>\n      \t\t\t</form>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=app.register.js.map