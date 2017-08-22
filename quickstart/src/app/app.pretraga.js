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
var PretragaComponent = (function () {
    function PretragaComponent(http) {
        this.http = http;
        this.name = 'Pretraga';
    }
    PretragaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost/it255/methotels/pretragaSoba.php')
            .map(function (response) { return response.json(); })
            .subscribe(function (sveSobe) { _this.sobe = sveSobe; console.log(_this.sobe); });
    };
    return PretragaComponent;
}());
PretragaComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{name}}</h1>\n\n            <div id=\"kreveti\">\n               <label for=\"brojKreveta\">Br. kreveta:</label>\n               <input type=\"text\" [(ngModel)]=\"brojKreveta\" name=\"brojKreveta\">\n            </div>\n            <br>\n            <div id=\"kvadrati\">\n               <label for=\"brojKvadrata\">Br. kvadrata:</label>\n               <input type=\"text\" [(ngModel)]=\"brojKvadrata\" name=\"brojKvadrata\">\n            </div>\n\n            <ul>\n              <li *ngFor=\"let soba of sobe | filterSoba:brojKreveta:brojKvadrata\">\n                <h3>Soba:{{soba.broj_sobe}}</h3>\n                <p>Broj kreveta:{{soba.broj_kreveta}}</p>\n                <p>Broj kvadrata:{{soba.broj_kvadrata}}</p>\n              </li>\n            </ul>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], PretragaComponent);
exports.PretragaComponent = PretragaComponent;
//# sourceMappingURL=app.pretraga.js.map