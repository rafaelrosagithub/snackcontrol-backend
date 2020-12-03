"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OrderController_1 = __importDefault(require("../controllers/OrderController"));
var orderRoutes = express_1.Router();
var orderController = new OrderController_1.default();
orderRoutes.get("/", orderController.index);
orderRoutes.get("/search", orderController.search);
orderRoutes.get("/:id", orderController.indexById);
orderRoutes.post("/", orderController.create);
orderRoutes.put("/:id", orderController.update);
exports.default = orderRoutes;
