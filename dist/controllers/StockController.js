"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StockRepository_1 = __importDefault(require("../repositories/StockRepository"));
var CreateStockService_1 = __importDefault(require("../services/CreateStockService"));
var UpdateStockService_1 = __importDefault(require("../services/UpdateStockService"));
var StockController = /** @class */ (function () {
    function StockController() {
    }
    StockController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var stockRepository, stocks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("StockController index()");
                        stockRepository = new StockRepository_1.default();
                        return [4 /*yield*/, stockRepository.findAll()];
                    case 1:
                        stocks = _a.sent();
                        return [2 /*return*/, response.json(stocks)];
                }
            });
        });
    };
    StockController.prototype.indexById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, stockRepository, stock;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("indexById");
                        id = request.params.id;
                        console.log("indexById: " + id);
                        stockRepository = new StockRepository_1.default();
                        return [4 /*yield*/, stockRepository.findAById(id)];
                    case 1:
                        stock = _a.sent();
                        return [2 /*return*/, response.json(stock)];
                }
            });
        });
    };
    StockController.prototype.search = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var title, stockRepository, stocks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("StockController search()");
                        title = request.query.title;
                        stockRepository = new StockRepository_1.default();
                        return [4 /*yield*/, stockRepository.findAllByName((title === null || title === void 0 ? void 0 : title.toString()) || "")];
                    case 1:
                        stocks = _a.sent();
                        return [2 /*return*/, response.json(stocks)];
                }
            });
        });
    };
    StockController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, qtd, unid_medida, lote, stockRepository, createStock, stock;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("StockController create()");
                        _a = request.body, title = _a.title, qtd = _a.qtd, unid_medida = _a.unid_medida, lote = _a.lote;
                        stockRepository = new StockRepository_1.default();
                        createStock = new CreateStockService_1.default(stockRepository);
                        return [4 /*yield*/, createStock.execute({
                                title: title,
                                qtd: qtd,
                                unid_medida: unid_medida,
                                lote: lote,
                            })];
                    case 1:
                        stock = _b.sent();
                        return [2 /*return*/, response.status(201).json(stock)];
                }
            });
        });
    };
    StockController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, qtd, unid_medida, lote, stockRepository, updateStock, stock;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("StockController update()");
                        id = request.params.id;
                        _a = request.body, title = _a.title, qtd = _a.qtd, unid_medida = _a.unid_medida, lote = _a.lote;
                        stockRepository = new StockRepository_1.default();
                        updateStock = new UpdateStockService_1.default(stockRepository);
                        return [4 /*yield*/, updateStock.execute({
                                id: id,
                                title: title,
                                qtd: qtd,
                                unid_medida: unid_medida,
                                lote: lote,
                            })];
                    case 1:
                        stock = _b.sent();
                        console.log("update cliente...");
                        return [2 /*return*/, response.json(stock)];
                }
            });
        });
    };
    return StockController;
}());
exports.default = StockController;
