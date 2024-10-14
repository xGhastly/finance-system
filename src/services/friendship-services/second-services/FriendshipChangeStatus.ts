import { IFriendshipChangeStatus } from '../../../interfaces/friendship-interfaces/IFriendshipChangeStatus';
import { IFriendshipProps } from '../../../interfaces/friendship-interfaces/props/IFriendshipProps';
import prismaClient from '../../../prisma';

class FriendshipChangeStatus implements IFriendshipChangeStatus {
    async changeStatus(action: string, friendship: IFriendshipProps) {
        if (action !== 'ACCEPTED' && action !== 'DECLINED') {
            throw new Error('Ação inválida use ACCEPTED ou DECLINED');
        }
        if (action === 'ACCEPTED') {
            const toChangeFriendship = friendship;
            toChangeFriendship.status = action;
            await prismaClient.friendship.update({
                where: { id: toChangeFriendship.id },
                data: { status: toChangeFriendship.status },
            });
        }

        if (action === 'DECLINED') {
            const toChangeFriendship = friendship;
            toChangeFriendship.status = action;
            await prismaClient.friendship.delete({
                where: { id: toChangeFriendship.id },
            });
        }
    }
}

export { FriendshipChangeStatus };
