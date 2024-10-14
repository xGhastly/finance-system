import { IFriendshipCheckStatus } from '../../../interfaces/friendship-interfaces/IFriendshipCheckStatus';
import { IFriendshipProps } from '../../../interfaces/friendship-interfaces/props/IFriendshipProps';

class FriendshipCheckStatus implements IFriendshipCheckStatus {
    async checkPendingStatus(friendship: IFriendshipProps) {
        if (friendship.status === 'PENDING') {
            throw new Error('Solicitação de amizade já existente.');
        }
    }
    async checkAcceptedStatus(friendship: IFriendshipProps) {
        if (friendship.status === 'ACCEPTED') {
            throw new Error('Vocês já são amigos.');
        }
    }
}

export { FriendshipCheckStatus };
