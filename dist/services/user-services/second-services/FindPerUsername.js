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
exports.FindPerUsername = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class FindPerUsername {
    existingUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const usernameToFind = yield prisma_1.default.customer.findUnique({
                where: {
                    username: username,
                },
            });
            if (usernameToFind) {
                throw new Error('Username já cadastrado');
            }
        });
    }
    findPerUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const usernameToFind = yield prisma_1.default.customer.findUnique({
                where: {
                    username: username,
                },
            });
            if (!usernameToFind) {
                throw new Error('Username inexistente');
            }
            return usernameToFind;
        });
    }
}
exports.FindPerUsername = FindPerUsername;
