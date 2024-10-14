import { IFriendshipCheckStatus } from '../../interfaces/friendship-interfaces/IFriendshipCheckStatus';
import { IFriendshipInviteService } from '../../interfaces/friendship-interfaces/IFriendshipInviteService';
import prismaClient from '../../prisma';

class FriendshipInviteService implements IFriendshipInviteService {
    constructor(private readonly checkStatus: IFriendshipCheckStatus) { }

    async sendFriendRequest(senderId: number, receiverId: number) {
        if (!receiverId || !senderId) {
            throw new Error('Usuario inexistente.');
        }
        const existingFriendship = await prismaClient.friendship.findUnique({
            where: {
                senderId_receiverId: {
                    senderId,
                    receiverId,
                },
            },
        });

        if (existingFriendship) {
            await this.checkStatus.checkPendingStatus(existingFriendship);
            await this.checkStatus.checkAcceptedStatus(existingFriendship);
        }
        const newFriendship = await prismaClient.friendship.create({
            data: {
                senderId,
                receiverId,
                status: 'PENDING',
            },
        });

        return newFriendship;
    }
}

export { FriendshipInviteService };
