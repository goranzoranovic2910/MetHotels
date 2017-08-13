"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FilterSobaPipe = (function () {
    function FilterSobaPipe() {
    }
    FilterSobaPipe.prototype.transform = function (value, brojKreveta, brojKvadrata) {
        if (!brojKreveta && !brojKvadrata) {
            return value;
        }
        else if (value) {
            return value.filter(function (i) {
                return (!brojKreveta || i["broj_kreveta"] == brojKreveta) &&
                    (!brojKvadrata || i["broj_kvadrata"] == brojKvadrata);
            });
        }
    };
    return FilterSobaPipe;
}());
FilterSobaPipe = __decorate([
    core_1.Pipe({ name: 'filterSoba' })
], FilterSobaPipe);
exports.FilterSobaPipe = FilterSobaPipe;
//# sourceMappingURL=filter.sobe.js.map