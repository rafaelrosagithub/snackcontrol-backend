"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
require("./config/env");
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("./database");
var routes_1 = __importDefault(require("./routes"));
var AppError_1 = __importDefault(require("./errors/AppError"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(routes_1.default);
app.use(function (err, request, response, _) {
    if (err instanceof AppError_1.default) {
        return response
            .status(err.statusCode)
            .json({ status: "error", message: err.message });
    }
    console.log(err);
    return response
        .status(500)
        .json({ status: "error", message: "Internal server error" });
});
dotenv_1.default.config();
app.listen(process.env.PORT || 3333);
