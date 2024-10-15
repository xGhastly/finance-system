import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipInviteService {
    sendFriendRequest(
        senderId: number,
        receiverUser: string,
    ): Promise<IFriendshipProps>;
}

export { IFriendshipInviteService };
