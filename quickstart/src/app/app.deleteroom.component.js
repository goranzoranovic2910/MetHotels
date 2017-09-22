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
var DeleteRoomComponent = (function () {
    function DeleteRoomComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.name = 'Brisanje sobe';
        this.soba = { broj_sobe: 0, broj_kreveta: 0, broj_kvadrata: 0, id_hotel: 1 };
        this.activatedRoute.params.subscribe(function (params) {
            return _this.http.get('http://localhost/it255/methotels/getSoba.php?broj_sobe=' + params['broj_sobe'])
                .map(function (response) { return response.json(); })
                .subscribe(function (result) { _this.soba = result; console.log(_this.soba); });
        });
    }
    DeleteRoomComponent.prototype.obrisiSobu = function () {
        var _this = this;
        var select = document.getElementById("hoteliSelect");
        var bodyString = JSON.stringify(this.soba);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://localhost/it255/methotels/deleteSoba.php", bodyString, options)
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
    return DeleteRoomComponent;
}());
DeleteRoomComponent = __decorate([
    core_1.Component({
        selector: 'app-deleteroom',
        template: "<h3>{{name}}</h3>\n            <form (submit)=\"obrisiSobu()\">\n\n              <p>Da li ste sigurni d zelite da obrisete sobu {{soba.broj_sobe}} ?</p>\n\n              <input type=\"submit\" value=\"Obrisi!\" />\n\n            </form>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, router_2.ActivatedRoute])
], DeleteRoomComponent);
exports.DeleteRoomComponent = DeleteRoomComponent;
//# sourceMappingURL=app.deleteroom.component.js.map