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
exports.ListTransactionsController = void 0;
class ListTransactionsController {
    constructor(listService) {
        this.listService = listService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ownerUser } = req.query;
            if (ownerUser) {
                const filterList = yield this.listService.listFilterTransactions(ownerUser);
                res.send(filterList);
                return;
            }
            const commumList = yield this.listService.listTransactions();
            res.send(commumList);
        });
    }
}
exports.ListTransactionsController = ListTransactionsController;
