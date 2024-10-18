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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeAccountService = void 0;
class IncomeAccountService {
    constructor(hasAccount, updateAccount) {
        this.hasAccount = hasAccount;
        this.updateAccount = updateAccount;
    }
    addIncome(customerId, amount, description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hasAccount.hasAccount(customerId);
            const account = yield this.updateAccount.update(customerId, amount, description, 'ENTRADA');
            return account;
        });
    }
}
exports.IncomeAccountService = IncomeAccountService;
