import { FriendshipInviteService } from '../../services/friendship-services/FriendshipInviteService';
import { Request, Response } from 'express';

class FriendshipInviteController {
    constructor(private readonly friendshipService: FriendshipInviteService) { }

    async handle(req: Request, res: Response) {
        const senderUser = res.locals.user;
        const receiverUser = req.params.receiverUser;

        try {
            const friendship = await this.friendshipService.sendFriendRequest(
                senderUser.id,
                receiverUser,
            );
            res.status(201).send(friendship);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message || 'Algo deu errado!',
                });
            }
        }
    }
}

export { FriendshipInviteController };
