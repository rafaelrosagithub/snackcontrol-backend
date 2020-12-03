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
exports.removeTask = exports.finishedProduct = exports.finishedProvider = exports.updateTask = exports.saveTask = exports.getTask = exports.getTasks = void 0;
var typeorm_1 = require("typeorm");
var Tasks_1 = require("../models/Tasks");
var Product_1 = __importDefault(require("../models/Product"));
var Provider_1 = __importDefault(require("../models/Provider"));
exports.getTasks = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("TasksController getTasks()");
                return [4 /*yield*/, typeorm_1.getRepository(Tasks_1.Tasks).find({
                        order: {
                            title: "ASC",
                        },
                    })];
            case 1:
                tasks = _a.sent();
                response.json(tasks);
                return [2 /*return*/];
        }
    });
}); };
exports.getTask = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                console.log(typeof id);
                console.log(id);
                console.log("getTask findBy id: " + id);
                return [4 /*yield*/, typeorm_1.getRepository(Tasks_1.Tasks).findOne(id)];
            case 1:
                task = _a.sent();
                return [2 /*return*/, response.json(task)];
        }
    });
}); };
exports.saveTask = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("saveTask Create...");
                return [4 /*yield*/, typeorm_1.getRepository(Tasks_1.Tasks).save(request.body)];
            case 1:
                task = _a.sent();
                return [2 /*return*/, response.json(task)];
        }
    });
}); };
exports.updateTask = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, task, taskUpdated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("updateTask update...");
                id = request.params.id;
                return [4 /*yield*/, typeorm_1.getRepository(Tasks_1.Tasks).update(id, request.body)];
            case 1:
                task = _a.sent();
                if (!(task.affected == 1)) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getRepository(Tasks_1.Tasks).findOne(id)];
            case 2:
                taskUpdated = _a.sent();
                return [2 /*return*/, response.json(taskUpdated)];
            case 3: return [2 /*return*/, response.status(404).json({ message: "Task not found!" })];
        }
    });
}); };
exports.finishedProvider = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, providerActive, provider, providerActive_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("TasksController finishedProvider()");
                id = request.params.id;
                return [4 /*yield*/, typeorm_1.getRepository(Provider_1.default).findOne(id)];
            case 1:
                providerActive = _a.sent();
                return [4 /*yield*/, typeorm_1.getRepository(Provider_1.default).update(id, {
                        active: !(providerActive === null || providerActive === void 0 ? void 0 : providerActive.active),
                    })];
            case 2:
                provider = _a.sent();
                if (!(provider.affected == 1)) return [3 /*break*/, 4];
                return [4 /*yield*/, typeorm_1.getRepository(Provider_1.default).findOne(id)];
            case 3:
                providerActive_1 = _a.sent();
                return [2 /*return*/, response.json({ message: "Provider disabled" })];
            case 4: return [2 /*return*/, response.status(404).json({ message: "Provider not found!" })];
        }
    });
}); };
exports.finishedProduct = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, productActive, product, productActive_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("TasksController finishedProduct()");
                id = request.params.id;
                return [4 /*yield*/, typeorm_1.getRepository(Product_1.default).findOne(id)];
            case 1:
                productActive = _a.sent();
                return [4 /*yield*/, typeorm_1.getRepository(Product_1.default).update(id, {
                        active: !(productActive === null || productActive === void 0 ? void 0 : productActive.active),
                    })];
            case 2:
                product = _a.sent();
                if (!(product.affected == 1)) return [3 /*break*/, 4];
                return [4 /*yield*/, typeorm_1.getRepository(Provider_1.default).findOne(id)];
            case 3:
                productActive_1 = _a.sent();
                return [2 /*return*/, response.json({ message: "Product disabled" })];
            case 4: return [2 /*return*/, response.status(404).json({ message: "Product not found!" })];
        }
    });
}); };
exports.removeTask = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, task, taskUpdated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                return [4 /*yield*/, typeorm_1.getRepository(Tasks_1.Tasks).delete(id)];
            case 1:
                task = _a.sent();
                if (!(task.affected == 1)) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getRepository(Tasks_1.Tasks).findOne(id)];
            case 2:
                taskUpdated = _a.sent();
                return [2 /*return*/, response.json({ message: "Task removed!" })];
            case 3: return [2 /*return*/, response.status(404).json({ message: "Task not found!" })];
        }
    });
}); };
