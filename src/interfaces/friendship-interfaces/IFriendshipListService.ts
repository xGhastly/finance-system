import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipListService {
    listFriendship(): Promise<IFriendshipProps[]>;
    listFilterFriendship(id?: number): Promise<IFriendshipProps[]>;
}

export { IFriendshipListService };
