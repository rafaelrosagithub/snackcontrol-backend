"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProviderController_1 = __importDefault(require("../controllers/ProviderController"));
var providerRoutes = express_1.Router();
var providerController = new ProviderController_1.default();
providerRoutes.get("/", providerController.index);
providerRoutes.get("/search", providerController.search);
providerRoutes.get("/:id", providerController.indexById);
providerRoutes.put("/:id", providerController.update);
exports.default = providerRoutes;
