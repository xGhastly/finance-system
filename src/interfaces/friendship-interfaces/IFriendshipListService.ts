import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipListService {
    listFriendship(): Promise<IFriendshipProps[]>;
    listFilterFriendship(user: string): Promise<IFriendshipProps[]>;
}

export { IFriendshipListService };
