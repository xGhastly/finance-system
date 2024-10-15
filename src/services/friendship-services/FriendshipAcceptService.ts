import { IFriendshipAcceptService } from '../../interfaces/friendship-interfaces/IFriendshipAcceptService';
import { IFriendshipChangeStatus } from '../../interfaces/friendship-interfaces/IFriendshipChangeStatus';
import { IFriendshipCheckExisting } from '../../interfaces/friendship-interfaces/IFriendshipCheckExisting';
import { IFriendshipCheckStatus } from '../../interfaces/friendship-interfaces/IFriendshipCheckStatus';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';

class FriendshipAcceptService implements IFriendshipAcceptService {
    constructor(
        private readonly checkExisting: IFriendshipCheckExisting,
        private readonly changeStatus: IFriendshipChangeStatus,
        private readonly checkStatus: IFriendshipCheckStatus,
        private readonly findUser: IFindPerUsername,
    ) { }

    async acceptFriendship(
        senderUser: string,
        receiverId: number,
        action: string,
    ) {
        const senderId = await this.findUser.findPerUsername(senderUser);
        const friendshipToAccept =
            await this.checkExisting.checkFriendshipNoExisting(
                senderId.id,
                receiverId,
            );

        await this.checkStatus.checkAcceptedStatus(friendshipToAccept);
        await this.changeStatus.changeStatus(action, friendshipToAccept);
        return friendshipToAccept;
    }
}

export { FriendshipAcceptService };
