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
exports.EditCustomerService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../../prisma"));
class EditCustomerService {
    constructor(findCustomer, hashPassword, validatorService) {
        this.findCustomer = findCustomer;
        this.hashPassword = hashPassword;
        this.validatorService = validatorService;
    }
    editCustomer(username, name, email, password, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newPassword === undefined || newPassword === '') {
                newPassword = password;
            }
            this.validatorService.validate({
                username,
                name,
                email,
                password: newPassword,
            });
            const findedCustomer = yield this.findCustomer.findPerUsername(username);
            if (!findedCustomer) {
                throw new Error('Usuário não encontrado');
            }
            if (!bcrypt_1.default.compareSync(password, findedCustomer.password)) {
                throw new Error('Senha atual inválida');
            }
            const newCustomerPassword = yield this.hashPassword.hashPassword(newPassword, 10);
            const editedCustomer = yield prisma_1.default.customer.update({
                where: { id: findedCustomer.id },
                data: {
                    name,
                    email,
                    password: newCustomerPassword,
                    updated_at: new Date(),
                },
            });
            return editedCustomer;
        });
    }
}
exports.EditCustomerService = EditCustomerService;
