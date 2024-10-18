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
exports.ListTransactionsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListTransactionsService {
    constructor(findCustomer) {
        this.findCustomer = findCustomer;
    }
    listTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionList = yield prisma_1.default.transaction.findMany();
            return transactionList;
        });
    }
    listFilterTransactions(customerUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this.findCustomer.findPerUsername(customerUser);
            const account = yield prisma_1.default.account.findUnique({
                where: {
                    customerId: customer.id,
                },
            });
            if (!account) {
                throw new Error('Usuário não possui uma conta.');
            }
            const transactionsToList = yield prisma_1.default.transaction.findMany({
                where: {
                    accountId: account.id,
                },
            });
            return transactionsToList;
        });
    }
}
exports.ListTransactionsService = ListTransactionsService;
