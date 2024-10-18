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
exports.IncomeAccountController = void 0;
class IncomeAccountController {
    constructor(incomeService) {
        this.incomeService = incomeService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerId = res.locals.user;
            const { amount, description } = req.body;
            try {
                const transaction = yield this.incomeService.addIncome(customerId.id, amount, description);
                res.send(transaction);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({
                        message: error.message || 'Algo deu errado',
                    });
                }
            }
        });
    }
}
exports.IncomeAccountController = IncomeAccountController;
