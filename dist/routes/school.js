"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SchollController_1 = __importDefault(require("../controllers/SchollController"));
var schoolRoutes = express_1.Router();
var schollController = new SchollController_1.default();
schoolRoutes.get("/", schollController.index);
schoolRoutes.get("/search", schollController.search);
schoolRoutes.get("/:id", schollController.indexById);
schoolRoutes.put("/:id", schollController.update);
exports.default = schoolRoutes;
