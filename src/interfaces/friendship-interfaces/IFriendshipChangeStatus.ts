import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipChangeStatus {
    changeStatus(action: string, friendship: IFriendshipProps): Promise<void>;
}

export { IFriendshipChangeStatus };
