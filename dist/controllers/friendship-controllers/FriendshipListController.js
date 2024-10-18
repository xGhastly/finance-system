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
exports.FriendshipListController = void 0;
class FriendshipListController {
    constructor(listService) {
        this.listService = listService;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user } = req.query;
                if (user) {
                    const filterFriendshipList = yield this.listService.listFilterFriendship(user);
                    res.send(filterFriendshipList);
                    return;
                }
                const friendshipList = yield this.listService.listFriendship();
                res.send(friendshipList);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({
                        message: error.message || 'Algo deu errado',
                    });
                }
            }
        });
    }
}
exports.FriendshipListController = FriendshipListController;
