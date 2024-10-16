import { IFriendshipCheckFriends } from '../../interfaces/friendship-interfaces/IFriendshipCheckFriends';
import { IFriendshipListService } from '../../interfaces/friendship-interfaces/IFriendshipListService';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';

import prismaClient from '../../prisma';

class FriendshipListService implements IFriendshipListService {
    constructor(
        private readonly findCustomer: IFindPerUsername,
        private readonly checkFriends: IFriendshipCheckFriends,
    ) { }

    async listFriendship() {
        const listFriendship = await prismaClient.friendship.findMany();
        return listFriendship;
    }

    async listFilterFriendship(user: string) {
        const findedCustomer = await this.findCustomer.findPerUsername(user);
        const listFriendship =
            await this.checkFriends.checkFriends(findedCustomer);
        return listFriendship;
    }
}

export { FriendshipListService };
