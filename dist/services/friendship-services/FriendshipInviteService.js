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
exports.FriendshipInviteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class FriendshipInviteService {
    constructor(checkStatus, findUser, findPerId) {
        this.checkStatus = checkStatus;
        this.findUser = findUser;
        this.findPerId = findPerId;
    }
    sendFriendRequest(senderId, receiverUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findUser.findPerUsername(receiverUser);
            if (!receiverUser) {
                throw new Error('Usuario inexistente.');
            }
            const senderUser = yield this.findPerId.findOne({ id: senderId });
            const existingFriendship = yield prisma_1.default.friendship.findUnique({
                where: {
                    senderId_receiverId: {
                        senderId,
                        receiverId: user.id,
                    },
                },
            });
            if (existingFriendship) {
                yield this.checkStatus.checkPendingStatus(existingFriendship);
                yield this.checkStatus.checkAcceptedStatus(existingFriendship);
            }
            const newFriendship = yield prisma_1.default.friendship.create({
                data: {
                    senderId,
                    senderUser: senderUser.username,
                    receiverId: user.id,
                    receiverUser: user.username,
                    status: 'PENDING',
                },
            });
            return newFriendship;
        });
    }
}
exports.FriendshipInviteService = FriendshipInviteService;
