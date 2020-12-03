"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductController_1 = __importDefault(require("../controllers/ProductController"));
var productRoutes = express_1.Router();
var productController = new ProductController_1.default();
productRoutes.get("/", productController.index);
productRoutes.get("/search", productController.search);
productRoutes.get("/:id", productController.indexById);
productRoutes.post("/", productController.create);
productRoutes.put("/:id", productController.update);
exports.default = productRoutes;
