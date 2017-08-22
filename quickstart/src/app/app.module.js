"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_pretraga_component_1 = require("./app.pretraga.component");
var app_newroom_component_1 = require("./app.newroom.component");
var app_newhotel_component_1 = require("./app.newhotel.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var filter_sobe_1 = require("./filter.sobe");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/pretraga',
                    pathMatch: 'full'
                },
                {
                    path: 'pretraga',
                    component: app_pretraga_component_1.PretragaComponent
                },
                {
                    path: 'newroom',
                    component: app_newroom_component_1.NewRoomComponent
                },
                {
                    path: 'newhotel',
                    component: app_newhotel_component_1.NewHotelComponent
                },
            ])],
        declarations: [app_component_1.AppComponent, filter_sobe_1.FilterSobaPipe, app_newroom_component_1.NewRoomComponent, app_pretraga_component_1.PretragaComponent, app_newhotel_component_1.NewHotelComponent],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map