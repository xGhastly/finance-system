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
exports.EditCustomerController = void 0;
class EditCustomerController {
    constructor(editCustomer) {
        this.editCustomer = editCustomer;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const username = req.params.user;
                const { name, email, password, newPassword } = req.body;
                const editedCustomer = yield this.editCustomer.editCustomer(username, name, email, password, newPassword || '');
                res.send(editedCustomer);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({
                        error: error.message || 'Error to edit customer',
                    });
                }
            }
        });
    }
}
exports.EditCustomerController = EditCustomerController;
