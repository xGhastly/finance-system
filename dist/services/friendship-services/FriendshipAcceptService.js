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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendshipAcceptService = void 0;
class FriendshipAcceptService {
    constructor(checkExisting, changeStatus, checkStatus, findUser) {
        this.checkExisting = checkExisting;
        this.changeStatus = changeStatus;
        this.checkStatus = checkStatus;
        this.findUser = findUser;
    }
    acceptFriendship(senderUser, receiverId, action) {
        return __awaiter(this, void 0, void 0, function* () {
            const senderId = yield this.findUser.findPerUsername(senderUser);
            const friendshipToAccept = yield this.checkExisting.checkFriendshipNoExisting(senderId.id, receiverId);
            yield this.checkStatus.checkAcceptedStatus(friendshipToAccept);
            yield this.changeStatus.changeStatus(action, friendshipToAccept);
            return friendshipToAccept;
        });
    }
}
exports.FriendshipAcceptService = FriendshipAcceptService;
