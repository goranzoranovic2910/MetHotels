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
var router_2 = require("@angular/router");
var UpdateRoomComponent = (function () {
    function UpdateRoomComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.name = 'Izmena sobe';
        this.soba = { broj_sobe: 0, broj_kreveta: 0, broj_kvadrata: 0, id_hotel: 1 };
        this.activatedRoute.params.subscribe(function (params) {
            return _this.http.get('http://localhost/it255/methotels/getSoba.php?broj_sobe=' + params['broj_sobe'])
                .map(function (response) { return response.json(); })
                .subscribe(function (result) { _this.soba = result; console.log(_this.soba); });
        });
    }
    UpdateRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost/it255/methotels/getHotels.php')
            .map(function (response) { return response.json(); })
            .subscribe(function (sviHoteli) { _this.hoteli = sviHoteli; console.log(_this.hoteli); });
    };
    UpdateRoomComponent.prototype.izmeniSobu = function () {
        var _this = this;
        var select = document.getElementById("hoteliSelect");
        this.soba.id_hotel = Number(select.options[select.selectedIndex].value);
        var bodyString = JSON.stringify(this.soba);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://localhost/it255/methotels/updateSoba.php", bodyString, options)
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
    return UpdateRoomComponent;
}());
UpdateRoomComponent = __decorate([
    core_1.Component({
        selector: 'app-updateroom',
        template: "<h3>{{name}}</h3>\n            <form (submit)=\"izmeniSobu()\">\n\n              <div id=\"broj\">\n                 <label for=\"brojKreveta\">Broj sobe : </label>\n                 <input type=\"text\" [(ngModel)]=\"soba.broj_sobe\" name=\"brojSobe\">\n              </div>\n\n              <div id=\"kreveti\">\n                 <label for=\"brojKreveta\">Br. kreveta:</label>\n                 <input type=\"text\" [(ngModel)]=\"soba.broj_kreveta\" name=\"brojKreveta\">\n              </div>\n              <br>\n              <div id=\"kvadrati\">\n                 <label for=\"brojKvadrata\">Br. kvadrata:</label>\n                 <input type=\"text\" [(ngModel)]=\"soba.broj_kvadrata\" name=\"brojKvadrata\">\n              </div>\n\n              <div id=\"hoteliDiv\">\n               <label for=\"hoteliSelect\">Hotel:</label>\n                <select id=\"hoteliSelect\">\n                  <option *ngFor=\"let hotel of hoteli\" value={{hotel.id}}>\n                    {{hotel.ime}}\n                  </option>\n                </select>\n              </div>\n\n              <input type=\"submit\" value=\"Izmeni!\" />\n\n            </form>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, router_2.ActivatedRoute])
], UpdateRoomComponent);
exports.UpdateRoomComponent = UpdateRoomComponent;
//# sourceMappingURL=app0.updateroom.component.js.map