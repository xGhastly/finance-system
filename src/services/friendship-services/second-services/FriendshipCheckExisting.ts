import { IFriendshipCheckExisting } from '../../../interfaces/friendship-interfaces/IFriendshipCheckExisting';
import prismaClient from '../../../prisma';

class FriendshipCheckExisting implements IFriendshipCheckExisting {
    async checkFriendshipNoExisting(senderId: number, receiverId: number) {
        const findedFriendship = await prismaClient.friendship.findUnique({
            where: {
                senderId_receiverId: {
                    senderId,
                    receiverId,
                },
            },
        });

        if (findedFriendship) {
            return findedFriendship;
        }
        throw new Error('Amizade não encontrada.');
    }
}

export { FriendshipCheckExisting };
