import { IFriendshipDeleteService } from '../../interfaces/friendship-interfaces/IFriendshipDeleteService';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';
import prismaClient from '../../prisma';

class FriendshipDeleteService implements IFriendshipDeleteService {
    constructor(private readonly findUser: IFindPerUsername) { }

    async deleteFriendship(userId: number, friendUser: string) {
        const friendId = await this.findUser.findPerUsername(friendUser);
        const commumFrienship = await prismaClient.friendship.findFirst({
            where: {
                OR: [
                    { senderId: userId, receiverId: friendId.id },
                    { senderId: friendId.id, receiverId: userId },
                ],
            },
        });

        if (!commumFrienship) {
            throw new Error('Amizade não encontrada');
        }
        await prismaClient.friendship.delete({
            where: { id: commumFrienship.id },
        });
        return commumFrienship;
    }
}

export { FriendshipDeleteService };
