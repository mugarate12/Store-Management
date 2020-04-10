"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var itemController_1 = require("./controllers/itemController");
var routes = express_1.Router();
// declaro minhas rotas
routes.get('/item', new itemController_1.ItemController().index);
routes.get('/item/:id', new itemController_1.ItemController().indexById);
routes.post('/item', new itemController_1.ItemController().create);
routes.put('/item/:id', new itemController_1.ItemController().update);
routes.delete('/item/:id', new itemController_1.ItemController().remove);
exports.default = routes;
