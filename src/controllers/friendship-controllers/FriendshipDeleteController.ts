import { IFriendshipDeleteService } from '../../interfaces/friendship-interfaces/IFriendshipDeleteService';
import { Request, Response } from 'express';

class FriendshipDeleteController {
    constructor(private readonly deleteService: IFriendshipDeleteService) { }

    async handle(req: Request, res: Response) {
        const { friendUser } = req.body as {
            friendUser: string;
        };

        const userId = res.locals.user;
        try {
            await this.deleteService.deleteFriendship(userId.id, friendUser);
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
