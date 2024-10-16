import { Request, Response } from 'express';
import { IFriendshipListService } from '../../interfaces/friendship-interfaces/IFriendshipListService';

class FriendshipListController {
    constructor(private readonly listService: IFriendshipListService) { }

    async handle(req: Request, res: Response) {
        try {
            const { user } = req.query as {
                user: string;
            };

            if (user) {
                const filterFriendshipList =
                    await this.listService.listFilterFriendship(user);

                res.send(filterFriendshipList);
                return;
            }

            const friendshipList = await this.listService.listFriendship();
            res.send(friendshipList);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({
                    message: error.message || 'Algo deu errado',
                });
            }
        }
    }
}

export { FriendshipListController };
