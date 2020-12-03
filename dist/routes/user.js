"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var userRoutes = express_1.Router();
var userController = new UserController_1.default();
userRoutes.post("/", userController.create);
userRoutes.patch("/:id", userController.enable);
userRoutes.get("/:id", userController.indexById);
userRoutes.put("/:id", userController.update);
exports.default = userRoutes;
