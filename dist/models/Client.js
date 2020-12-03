"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Client = /** @class */ (function () {
    function Client() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Client.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Client.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], Client.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Client.prototype, "telephone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Client.prototype, "cnpj", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.Generated("uuid"),
        __metadata("design:type", String)
    ], Client.prototype, "code", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Client.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Client.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Client.prototype, "user_uuid", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Client.prototype, "finished", void 0);
    Client = __decorate([
        typeorm_1.Entity("provider")
    ], Client);
    return Client;
}());
exports.default = Client;
