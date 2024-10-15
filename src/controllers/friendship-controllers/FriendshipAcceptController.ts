import { Request, Response } from 'express';
import { FriendshipAcceptService } from '../../services/friendship-services/FriendshipAcceptService';

class FriendshipAcceptController {
    constructor(private readonly acceptService: FriendshipAcceptService) { }

    async handle(req: Request, res: Response) {
        try {
            const { action } = req.body as {
                action: string;
            };
            const senderUsername = req.params.senderUsername;
            const receiverId = res.locals.user;

            const acceptedFriendship =
                await this.acceptService.acceptFriendship(
                    senderUsername,
                    receiverId.id,
                    action,
                );
            res.status(200).send(acceptedFriendship);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message || 'Algo deu errado.',
                });
            }
        }
    }
}

export { FriendshipAcceptController };
