"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BiddingController_1 = __importDefault(require("../controllers/BiddingController"));
var biddingRoutes = express_1.Router();
var biddingController = new BiddingController_1.default();
biddingRoutes.get("/", biddingController.index);
biddingRoutes.get("/search", biddingController.search);
biddingRoutes.get("/:id", biddingController.indexById);
biddingRoutes.post("/", biddingController.create);
exports.default = biddingRoutes;
