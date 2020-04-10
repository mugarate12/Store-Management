"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(function () {
    app_1.default.listen(3333, function () {
        console.log('\nListening on port 3333');
    });
})
    .catch(function (error) { return console.log(error); });
