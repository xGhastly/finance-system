import { IFriendshipCheckFriends } from '../../../interfaces/friendship-interfaces/IFriendshipCheckFriends';
import { ICustomerProps } from '../../../interfaces/user-interfaces/props/ICustomerProps';
import prismaClient from '../../../prisma';

class FriendshipCheckFriends implements IFriendshipCheckFriends {
    async checkFriends(findedCustomer: ICustomerProps) {
        const listFriendship = await prismaClient.friendship.findMany({
            where: {
                OR: [
                    { senderId: findedCustomer.id },
                    { receiverId: findedCustomer.id },
                ],
            },
        });
        if (listFriendship.length < 1) {
            throw new Error('Usuário não possui amigos.');
        }
        return listFriendship;
    }
}

export { FriendshipCheckFriends };
