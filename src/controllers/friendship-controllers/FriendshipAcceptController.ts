import { Request, Response } from 'express';
import { FriendshipAcceptService } from '../../services/friendship-services/FriendshipAcceptService';

class FriendshipAcceptController {
    constructor(private readonly acceptService: FriendshipAcceptService) { }

    async handle(req: Request, res: Response) {
        try {
            const { senderId, receiverId, action } = req.body as {
                senderId: number;
                receiverId: number;
                action: string;
            };

            const acceptedFriendship =
                await this.acceptService.acceptFriendship(
                    senderId,
                    receiverId,
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
