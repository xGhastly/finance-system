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
exports.ListCustomerController = void 0;
class ListCustomerController {
    constructor(listService) {
        this.listService = listService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email } = req.query;
                if (name || email) {
                    const filterList = yield this.listService.returnFilterList(name, email);
                    res.send(filterList);
                    return;
                }
                const listCostumer = yield this.listService.returnList();
                res.send(listCostumer);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({
                        error: error.message || 'Error to get list',
                    });
                }
            }
        });
    }
}
exports.ListCustomerController = ListCustomerController;
