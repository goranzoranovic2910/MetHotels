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
var app_updateroom_component_1 = require("./app.updateroom.component");
var app_deleteroom_component_1 = require("./app.deleteroom.component");
var app_newhotel_component_1 = require("./app.newhotel.component");
var app_login_1 = require("./app.login");
var app_register_1 = require("./app.register");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var filter_sobe_1 = require("./filter.sobe");
var router_1 = require("@angular/router");
var ngx_cookie_1 = require("ngx-cookie");
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
            ngx_cookie_1.CookieModule.forRoot(),
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
                    path: 'updateRoom/:broj_sobe',
                    component: app_updateroom_component_1.UpdateRoomComponent
                },
                {
                    path: 'deleteRoom/:broj_sobe',
                    component: app_deleteroom_component_1.DeleteRoomComponent
                },
                {
                    path: 'newhotel',
                    component: app_newhotel_component_1.NewHotelComponent
                },
                {
                    path: 'login',
                    component: app_login_1.LoginComponent
                },
                {
                    path: 'register',
                    component: app_register_1.RegisterComponent
                },
            ])],
        declarations: [app_component_1.AppComponent, filter_sobe_1.FilterSobaPipe, app_newroom_component_1.NewRoomComponent, app_updateroom_component_1.UpdateRoomComponent, app_deleteroom_component_1.DeleteRoomComponent, app_pretraga_component_1.PretragaComponent, app_newhotel_component_1.NewHotelComponent, app_login_1.LoginComponent, app_register_1.RegisterComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map