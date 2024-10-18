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
exports.FriendshipInviteController = void 0;
class FriendshipInviteController {
    constructor(friendshipService) {
        this.friendshipService = friendshipService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const senderUser = res.locals.user;
            const receiverUser = req.params.receiverUser;
            try {
                const friendship = yield this.friendshipService.sendFriendRequest(senderUser.id, receiverUser);
                res.status(201).send(friendship);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({
                        error: error.message || 'Algo deu errado!',
                    });
                }
            }
        });
    }
}
exports.FriendshipInviteController = FriendshipInviteController;
