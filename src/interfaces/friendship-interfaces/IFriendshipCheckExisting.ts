import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipCheckExisting {
    checkFriendshipNoExisting(
        senderId: number,
        receiverId: number,
    ): Promise<IFriendshipProps>;
}

export { IFriendshipCheckExisting };
