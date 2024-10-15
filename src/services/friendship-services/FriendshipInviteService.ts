import { IFriendshipCheckStatus } from '../../interfaces/friendship-interfaces/IFriendshipCheckStatus';
import { IFriendshipInviteService } from '../../interfaces/friendship-interfaces/IFriendshipInviteService';
import { IFindOneCustomerService } from '../../interfaces/user-interfaces/IFindOneCustomerService';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';
import prismaClient from '../../prisma';

class FriendshipInviteService implements IFriendshipInviteService {
    constructor(
        private readonly checkStatus: IFriendshipCheckStatus,
        private readonly findUser: IFindPerUsername,
        private readonly findPerId: IFindOneCustomerService,
    ) { }

    async sendFriendRequest(senderId: number, receiverUser: string) {
        const user = await this.findUser.findPerUsername(receiverUser);
        if (!receiverUser) {
            throw new Error('Usuario inexistente.');
        }
        const senderUser = await this.findPerId.findOne({ id: senderId });
        const existingFriendship = await prismaClient.friendship.findUnique({
            where: {
                senderId_receiverId: {
                    senderId,
                    receiverId: user.id,
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
                senderUser: senderUser.username,
                receiverId: user.id,
                receiverUser: user.username,
                status: 'PENDING',
            },
        });

        return newFriendship;
    }
}

export { FriendshipInviteService };
