import { IFriendshipDeleteService } from '../../interfaces/friendship-interfaces/IFriendshipDeleteService';
import prismaClient from '../../prisma';

class FriendshipDeleteService implements IFriendshipDeleteService {
    constructor() { }

    async deleteFriendship(userId: number, friendId: number) {
        const commumFrienship = await prismaClient.friendship.findFirst({
            where: {
                OR: [
                    { senderId: userId, receiverId: friendId },
                    { senderId: friendId, receiverId: userId },
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
