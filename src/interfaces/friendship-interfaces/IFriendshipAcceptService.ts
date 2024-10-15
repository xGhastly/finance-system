import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipAcceptService {
    acceptFriendship(
        senderUser: string,
        receiverId: number,
        action: string,
    ): Promise<IFriendshipProps>;
}

export { IFriendshipAcceptService };
