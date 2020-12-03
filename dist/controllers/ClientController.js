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
var ClientRepository_1 = __importDefault(require("../repositories/ClientRepository"));
var CreateClientService_1 = __importDefault(require("../services/CreateClientService"));
var UpdateClientService_1 = __importDefault(require("../services/UpdateClientService"));
var PaginatedClientService_1 = __importDefault(require("../services/PaginatedClientService"));
var DeleteClientService_1 = __importDefault(require("../services/DeleteClientService"));
var ClientController = /** @class */ (function () {
    function ClientController() {
    }
    ClientController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var clientRepository, clients;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clientRepository = new ClientRepository_1.default();
                        return [4 /*yield*/, clientRepository.findAll()];
                    case 1:
                        clients = _a.sent();
                        return [2 /*return*/, response.json(clients)];
                }
            });
        });
    };
    ClientController.prototype.indexById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, clientRepository, client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("indexById");
                        id = request.params.id;
                        console.log("indexById: " + id);
                        clientRepository = new ClientRepository_1.default();
                        return [4 /*yield*/, clientRepository.findAById(id)];
                    case 1:
                        client = _a.sent();
                        return [2 /*return*/, response.json(client)];
                }
            });
        });
    };
    ClientController.prototype.paginated = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var page, clientRepository, clientsPaginated, clients;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = request.query.page;
                        clientRepository = new ClientRepository_1.default();
                        clientsPaginated = new PaginatedClientService_1.default(clientRepository);
                        return [4 /*yield*/, clientsPaginated.execute({
                                page: page !== undefined ? parseInt(page.toString(), 10) : 0,
                            })];
                    case 1:
                        clients = _a.sent();
                        return [2 /*return*/, response.json(clients)];
                }
            });
        });
    };
    ClientController.prototype.search = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, clientRepository, clients;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = request.query.name;
                        clientRepository = new ClientRepository_1.default();
                        return [4 /*yield*/, clientRepository.findAllByName((name === null || name === void 0 ? void 0 : name.toString()) || "")];
                    case 1:
                        clients = _a.sent();
                        return [2 /*return*/, response.json(clients)];
                }
            });
        });
    };
    ClientController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, telephone, cnpj, user_uuid, clientRepository, createClient, client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, telephone = _a.telephone, cnpj = _a.cnpj, user_uuid = _a.user_uuid;
                        clientRepository = new ClientRepository_1.default();
                        createClient = new CreateClientService_1.default(clientRepository);
                        return [4 /*yield*/, createClient.execute({
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
    ClientController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, email, telephone, cnpj, clientRepository, updateClient, client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, email = _a.email, telephone = _a.telephone, cnpj = _a.cnpj;
                        clientRepository = new ClientRepository_1.default();
                        updateClient = new UpdateClientService_1.default(clientRepository);
                        return [4 /*yield*/, updateClient.execute({
                                id: id,
                                name: name,
                                email: email,
                                telephone: telephone,
                                cnpj: cnpj,
                            })];
                    case 1:
                        client = _b.sent();
                        console.log("update cliente...");
                        return [2 /*return*/, response.json(client)];
                }
            });
        });
    };
    ClientController.prototype.destroy = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, clientRepository, destroyClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        clientRepository = new ClientRepository_1.default();
                        destroyClient = new DeleteClientService_1.default(clientRepository);
                        return [4 /*yield*/, destroyClient.execute(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(204).send()];
                }
            });
        });
    };
    return ClientController;
}());
exports.default = ClientController;
