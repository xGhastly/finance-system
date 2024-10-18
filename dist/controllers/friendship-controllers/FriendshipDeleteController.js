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
exports.FriendshipDeleteController = void 0;
class FriendshipDeleteController {
    constructor(deleteService) {
        this.deleteService = deleteService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { friendUser } = req.body;
            const userId = res.locals.user;
            try {
                yield this.deleteService.deleteFriendship(userId.id, friendUser);
                res.send(`Amizade deletada`);
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
exports.FriendshipDeleteController = FriendshipDeleteController;
