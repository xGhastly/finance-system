import { IFriendshipAcceptService } from '../../interfaces/friendship-interfaces/IFriendshipAcceptService';
import { IFriendshipChangeStatus } from '../../interfaces/friendship-interfaces/IFriendshipChangeStatus';
import { IFriendshipCheckExisting } from '../../interfaces/friendship-interfaces/IFriendshipCheckExisting';
import { IFriendshipCheckStatus } from '../../interfaces/friendship-interfaces/IFriendshipCheckStatus';

class FriendshipAcceptService implements IFriendshipAcceptService {
    constructor(
        private readonly checkExisting: IFriendshipCheckExisting,
        private readonly changeStatus: IFriendshipChangeStatus,
        private readonly checkStatus: IFriendshipCheckStatus,
    ) { }

    async acceptFriendship(
        senderId: number,
        receiverId: number,
        action: string,
    ) {
        const friendshipToAccept =
            await this.checkExisting.checkFriendshipNoExisting(
                senderId,
                receiverId,
            );

        await this.checkStatus.checkAcceptedStatus(friendshipToAccept);
        await this.changeStatus.changeStatus(action, friendshipToAccept);
        return friendshipToAccept;
    }
}

export { FriendshipAcceptService };
