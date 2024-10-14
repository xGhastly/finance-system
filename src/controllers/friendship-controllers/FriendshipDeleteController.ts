import { IFriendshipDeleteService } from '../../interfaces/friendship-interfaces/IFriendshipDeleteService';
import { Request, Response } from 'express';

class FriendshipDeleteController {
    constructor(private readonly deleteService: IFriendshipDeleteService) { }

    async handle(req: Request, res: Response) {
        const { userId, friendId } = req.body as {
            userId: number;
            friendId: number;
        };
        try {
            await this.deleteService.deleteFriendship(userId, friendId);
            res.send(`Amizade deletada`);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message || 'Algo deu errado!',
                });
            }
        }
    }
}

export { FriendshipDeleteController };
