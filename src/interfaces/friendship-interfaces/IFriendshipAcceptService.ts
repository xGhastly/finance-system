import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipAcceptService {
    acceptFriendship(
        senderId: number,
        receiverId: number,
        action: string,
    ): Promise<IFriendshipProps>;
}

export { IFriendshipAcceptService };
