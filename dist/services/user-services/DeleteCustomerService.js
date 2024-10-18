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
exports.DeleteCustomerService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteCustomerService {
    constructor(findOneService) {
        this.findOneService = findOneService;
    }
    deleteCustomer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            if (!id) {
                throw new Error('Solicitação inválida');
            }
            const findedCustomer = yield this.findOneService.findOne({ id });
            yield prisma_1.default.customer.delete({
                where: {
                    id: Number(findedCustomer.id),
                },
            });
            return { message: 'Deletado com Sucesso' };
        });
    }
}
exports.DeleteCustomerService = DeleteCustomerService;
