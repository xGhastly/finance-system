import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipInviteService {
    sendFriendRequest(
        senderId: number,
        receiverId: number,
    ): Promise<IFriendshipProps>;
}

export { IFriendshipInviteService };
