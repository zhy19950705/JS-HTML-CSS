"use strict";
exports.__esModule = true;
var Baby = /** @class */ (function () {
    function Baby(name) {
        this._name = name;
        console.log('晗晗想睡觉');
    }
    Baby.smile = function () {
        console.log('开心');
    };
    Baby.prototype.getBabyByName = function () {
        return this._name;
    };
    return Baby;
}());
exports.Baby = Baby;
exports.baby = new Baby('晗晗');
