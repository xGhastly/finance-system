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
exports.CreateCustomerService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateCustomerService {
    constructor(validatorService, hashService, emailService, userService) {
        this.validatorService = validatorService;
        this.hashService = hashService;
        this.emailService = emailService;
        this.userService = userService;
    }
    createCustomer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ username, name, email, password, }) {
            this.validatorService.validate({
                username,
                name,
                email,
                password,
            });
            const hashedPassword = yield this.hashService.hashPassword(password, 10);
            yield this.userService.existingUsername(username);
            yield this.emailService.existingEmail(email);
            const customer = yield prisma_1.default.customer.create({
                data: {
                    username,
                    name,
                    email,
                    password: hashedPassword,
                    status: true,
                },
            });
            return customer;
        });
    }
}
exports.CreateCustomerService = CreateCustomerService;
