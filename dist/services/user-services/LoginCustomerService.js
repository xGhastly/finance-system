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
exports.LoginCustomerService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class LoginCustomerService {
    constructor(findPerUsername, jwtService) {
        this.findPerUsername = findPerUsername;
        this.jwtService = jwtService;
    }
    loginCustomer(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findPerUsername.findPerUsername(username);
            if (!user) {
                throw new Error('Usuário não encontrado.');
            }
            if (!bcrypt_1.default.compareSync(password, user.password)) {
                throw new Error('Senha errada');
            }
            const token = this.jwtService.generateToken({
                id: user.id,
                username: user.username,
            }, '24h');
            return token;
        });
    }
}
exports.LoginCustomerService = LoginCustomerService;
