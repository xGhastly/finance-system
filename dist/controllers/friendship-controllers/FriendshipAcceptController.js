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
exports.FriendshipAcceptController = void 0;
class FriendshipAcceptController {
    constructor(acceptService) {
        this.acceptService = acceptService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { action } = req.body;
                const senderUsername = req.params.senderUsername;
                const receiverId = res.locals.user;
                const acceptedFriendship = yield this.acceptService.acceptFriendship(senderUsername, receiverId.id, action);
                res.status(200).send(acceptedFriendship);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({
                        error: error.message || 'Algo deu errado.',
                    });
                }
            }
        });
    }
}
exports.FriendshipAcceptController = FriendshipAcceptController;
