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
var NewHotelComponent = (function () {
    function NewHotelComponent(http, router) {
        this.http = http;
        this.router = router;
        this.name = 'Dodavanje hotela';
        this.noviHotel = { id: 0, ime: "" };
    }
    NewHotelComponent.prototype.dodajHotel = function () {
        var _this = this;
        var bodyString = JSON.stringify(this.noviHotel);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://localhost/it255/methotels/insertHotel.php", bodyString, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.result == "success") {
                console.log(_this.router);
                _this.router.navigate(['/pretraga']);
            }
            else {
                console.log("Error!");
                alert(response);
            }
        });
    };
    return NewHotelComponent;
}());
NewHotelComponent = __decorate([
    core_1.Component({
        selector: 'app-newhotel',
        template: "<h3>{{name}}</h3>\n            <form (submit)=\"dodajHotel()\">\n\n              <div id=\"idhotel\">\n                 <label for=\"idHotela\">ID Hotela : </label>\n                 <input type=\"text\" [(ngModel)]=\"noviHotel.id\" name=\"idHotela\">\n              </div>\n\n              <div id=\"ime\">\n                 <label for=\"ime\">Ime hotela:</label>\n                 <input type=\"text\" [(ngModel)]=\"noviHotel.ime\" name=\"ime\">\n              </div>\n              <br>\n\n              <input type=\"submit\" value=\"Dodaj!\" />\n\n            </form>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], NewHotelComponent);
exports.NewHotelComponent = NewHotelComponent;
//# sourceMappingURL=app.newhotel.component.js.map