import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipDeleteService {
    deleteFriendship(
        senderId: number,
        receiverId: number,
    ): Promise<IFriendshipProps>;
}

export { IFriendshipDeleteService };
