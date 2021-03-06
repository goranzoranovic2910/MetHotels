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
var ngx_cookie_1 = require("ngx-cookie");
var AppComponent = (function () {
    function AppComponent(cookieService) {
        this.cookieService = cookieService;
        this.name = "MetHotels";
    }
    AppComponent.prototype.userLoggedIn = function () {
        return this.cookieService.get('CurrentUser') != null;
    };
    AppComponent.prototype.logOut = function () {
        this.cookieService.remove('CurrentUser');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{name}}</h1>\n  <a routerLink=\"/pretraga\">Pretraga</a>\n  <a routerLink=\"/newroom\">Dodaj sobu</a>\n  <a routerLink=\"/newhotel\">Dodaj hotel</a>\n  <div *ngIf=\"!userLoggedIn()\">\n    <a routerLink=\"/login\">Uloguj se</a>\n    <a routerLink=\"/register\">Registruj se</a>\n  </div>\n  <div *ngIf=\"userLoggedIn()\">\n    <input type=\"button\" (click)=\"logOut()\" value=\"Log out\"/>\n  </div>\n  <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [ngx_cookie_1.CookieService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map