"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ClientController_1 = __importDefault(require("../controllers/ClientController"));
var clientRoutes = express_1.Router();
var clientController = new ClientController_1.default();
clientRoutes.get("/", clientController.index);
clientRoutes.get("/:id", clientController.indexById);
clientRoutes.get("/paginated", clientController.paginated);
clientRoutes.get("/search", clientController.search);
clientRoutes.post("/", clientController.create);
clientRoutes.put("/:id", clientController.update);
clientRoutes.delete("/:id", clientController.destroy);
exports.default = clientRoutes;
