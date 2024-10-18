"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: '12h' });
    }
    decodeToken(token) {
        const userData = jsonwebtoken_1.default.decode(token);
        if (!userData) {
            throw new Error('error');
        }
        return userData;
    }
}
exports.JwtService = JwtService;
