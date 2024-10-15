import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipDeleteService {
    deleteFriendship(
        userId: number,
        friendUser: string,
    ): Promise<IFriendshipProps>;
}

export { IFriendshipDeleteService };
