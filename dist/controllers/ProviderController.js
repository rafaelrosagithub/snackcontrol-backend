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
var ProviderRepository_1 = __importDefault(require("../repositories/ProviderRepository"));
var CreateProviderService_1 = __importDefault(require("../services/CreateProviderService"));
var UpdateProviderService_1 = __importDefault(require("../services/UpdateProviderService"));
var PaginatedProviderService_1 = __importDefault(require("../services/PaginatedProviderService"));
var ProviderController = /** @class */ (function () {
    function ProviderController() {
    }
    ProviderController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var providerRepository, providers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ProviderController index()");
                        providerRepository = new ProviderRepository_1.default();
                        return [4 /*yield*/, providerRepository.findAll()];
                    case 1:
                        providers = _a.sent();
                        return [2 /*return*/, response.json(providers)];
                }
            });
        });
    };
    ProviderController.prototype.indexById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, providerRepository, provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("indexById...");
                        id = request.params.id;
                        console.log("indexById: " + id);
                        providerRepository = new ProviderRepository_1.default();
                        return [4 /*yield*/, providerRepository.findAById(id)];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, response.json(provider)];
                }
            });
        });
    };
    ProviderController.prototype.paginated = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var page, providerRepository, providerPaginated, provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = request.query.page;
                        providerRepository = new ProviderRepository_1.default();
                        providerPaginated = new PaginatedProviderService_1.default(providerRepository);
                        return [4 /*yield*/, providerPaginated.execute({
                                page: page !== undefined ? parseInt(page.toString(), 10) : 0,
                            })];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, response.json(provider)];
                }
            });
        });
    };
    ProviderController.prototype.search = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, providerRepository, provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ProviderController search()");
                        name = request.query.name;
                        providerRepository = new ProviderRepository_1.default();
                        console.log(name);
                        return [4 /*yield*/, providerRepository.findAllByName((name === null || name === void 0 ? void 0 : name.toString()) || "")];
                    case 1:
                        provider = _a.sent();
                        console.log(provider);
                        return [2 /*return*/, response.json(provider)];
                }
            });
        });
    };
    ProviderController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, telephone, cnpj, user_uuid, providerRepository, createProvider, client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, telephone = _a.telephone, cnpj = _a.cnpj, user_uuid = _a.user_uuid;
                        providerRepository = new ProviderRepository_1.default();
                        createProvider = new CreateProviderService_1.default(providerRepository);
                        return [4 /*yield*/, createProvider.execute({
                                name: name,
                                email: email,
                                telephone: telephone,
                                cnpj: cnpj,
                                user_uuid: user_uuid,
                            })];
                    case 1:
                        client = _b.sent();
                        return [2 /*return*/, response.status(201).json(client)];
                }
            });
        });
    };
    ProviderController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, email, telephone, cnpj, providerRepository, updateProvider, provider;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, email = _a.email, telephone = _a.telephone, cnpj = _a.cnpj;
                        providerRepository = new ProviderRepository_1.default();
                        updateProvider = new UpdateProviderService_1.default(providerRepository);
                        return [4 /*yield*/, updateProvider.execute({
                                id: id,
                                name: name,
                                email: email,
                                telephone: telephone,
                                cnpj: cnpj,
                            })];
                    case 1:
                        provider = _b.sent();
                        console.log("update provider...");
                        return [2 /*return*/, response.json(provider)];
                }
            });
        });
    };
    return ProviderController;
}());
exports.default = ProviderController;
