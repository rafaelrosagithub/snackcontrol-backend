"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var StockController_1 = __importDefault(require("../controllers/StockController"));
var stockRoutes = express_1.Router();
var stockController = new StockController_1.default();
stockRoutes.get("/", stockController.index);
stockRoutes.get("/search", stockController.search);
stockRoutes.get("/:id", stockController.indexById);
stockRoutes.post("/", stockController.create);
stockRoutes.put("/:id", stockController.update);
exports.default = stockRoutes;
