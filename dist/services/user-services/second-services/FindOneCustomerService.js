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
exports.FindOneCustomerService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class FindOneCustomerService {
    findOne(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            if (!id) {
                throw new Error('Insira um id');
            }
            if (typeof id === 'string' && !/^\d+$/.test(id)) {
                throw new Error('ID deve ser um valor numérico');
            }
            const numericId = Number(id);
            const findedCustomer = yield prisma_1.default.customer.findFirst({
                where: {
                    id: numericId,
                },
            });
            if (!findedCustomer) {
                throw new Error('Cliente não existe');
            }
            return findedCustomer;
        });
    }
}
exports.FindOneCustomerService = FindOneCustomerService;
