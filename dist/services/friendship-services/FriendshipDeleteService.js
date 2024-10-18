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
exports.FriendshipDeleteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class FriendshipDeleteService {
    constructor(findUser) {
        this.findUser = findUser;
    }
    deleteFriendship(userId, friendUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const friendId = yield this.findUser.findPerUsername(friendUser);
            const commumFrienship = yield prisma_1.default.friendship.findFirst({
                where: {
                    OR: [
                        { senderId: userId, receiverId: friendId.id },
                        { senderId: friendId.id, receiverId: userId },
                    ],
                },
            });
            if (!commumFrienship) {
                throw new Error('Amizade não encontrada');
            }
            yield prisma_1.default.friendship.delete({
                where: { id: commumFrienship.id },
            });
            return commumFrienship;
        });
    }
}
exports.FriendshipDeleteService = FriendshipDeleteService;
