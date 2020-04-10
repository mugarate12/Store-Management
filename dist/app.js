"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
var routes_1 = __importDefault(require("./routes"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.middlewares();
    }
    App.prototype.middlewares = function () {
        this.express.use(cors_1.default());
        this.express.use(express_1.default.json());
        this.express.use(routes_1.default);
    };
    return App;
}());
exports.default = new App().express;
