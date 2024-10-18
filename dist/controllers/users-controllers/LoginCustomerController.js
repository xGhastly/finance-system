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
exports.LoginCustomerController = void 0;
class LoginCustomerController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const result = yield this.loginService.loginCustomer(username, password);
                res.send(`Login efetuado com sucesso, token: ${result}`);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(401).json({
                        error: error.message,
                    });
                }
            }
        });
    }
}
exports.LoginCustomerController = LoginCustomerController;
