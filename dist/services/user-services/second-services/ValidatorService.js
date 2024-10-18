"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorService = void 0;
const joi_1 = __importDefault(require("joi"));
class ValidatorService {
    validate(data) {
        const schema = joi_1.default.object({
            username: joi_1.default.string()
                .min(4)
                .max(50)
                .required()
                .pattern(/^[a-z]+$/, 'letters only')
                .custom((value) => {
                return value.toLowerCase();
            }, 'transform to lowercase')
                .messages({
                'string.pattern.base': 'O username deve conter apenas letras minúsculas.',
                'string.min': 'O username deve ter pelo menos 4 caracteres.',
                'string.max': 'O nome deve ter no máximo 50 caracteres.',
                'any.required': 'O nome é obrigatório.',
            }),
            name: joi_1.default.string().max(50).required().messages({
                'string.max': 'O nome deve ter no máximo 50 caracteres.',
                'any.required': 'O nome é obrigatório.',
            }),
            email: joi_1.default.string().email().max(50).required().messages({
                'string.email': 'O email deve ser válido.',
                'string.max': 'O email deve ter no máximo 50 caracteres.',
                'any.required': 'O email é obrigatório.',
            }),
            password: joi_1.default.string().min(8).max(20).required().messages({
                'string.min': 'A senha deve ter pelo menos 8 caracteres.',
                'string.max': 'A senha deve ter no máximo 20 caracteres.',
                'any.required': 'A senha é obrigatória.',
            }),
            newPassword: joi_1.default.string().min(8).max(20).messages({
                'string.min': 'A senha deve ter pelo menos 8 caracteres.',
                'string.max': 'A senha deve ter no máximo 20 caracteres.',
                'any.required': 'A senha é obrigatória.',
            }),
        });
        const { error, value } = schema.validate(data, { convert: true });
        if (error) {
            throw new Error(error.details[0].message);
        }
        Object.assign(data, value);
    }
}
exports.ValidatorService = ValidatorService;
