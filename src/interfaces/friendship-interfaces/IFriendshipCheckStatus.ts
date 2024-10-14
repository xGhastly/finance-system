import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipCheckStatus {
    checkPendingStatus(friendship: IFriendshipProps): Promise<void>;
    checkAcceptedStatus(friendship: IFriendshipProps): Promise<void>;
}

export { IFriendshipCheckStatus };
