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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAccountService {
    constructor(findCustomer) {
        this.findCustomer = findCustomer;
    }
    createAccount(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerUser = yield this.findCustomer.findOne({
                id: customerId,
            });
            const hasAccount = yield prisma_1.default.account.findUnique({
                where: {
                    customerId,
                },
            });
            if (hasAccount) {
                throw new Error('Usuário já possui uma conta.');
            }
            const account = yield prisma_1.default.account.create({
                data: {
                    customerId,
                    ownerUser: customerUser.username,
                },
            });
            return account;
        });
    }
}
exports.CreateAccountService = CreateAccountService;
