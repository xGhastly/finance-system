import { IFriendshipCheckExisting } from '../../interfaces/friendship-interfaces/IFriendshipCheckExisting';
import { IFriendshipCheckFriends } from '../../interfaces/friendship-interfaces/IFriendshipCheckFriends';
import { IFriendshipListService } from '../../interfaces/friendship-interfaces/IFriendshipListService';
import { IFindOneCustomerService } from '../../interfaces/user-interfaces/IFindOneCustomerService';
import prismaClient from '../../prisma';

class FriendshipListService implements IFriendshipListService {
    constructor(
        private readonly checkExisting: IFriendshipCheckExisting,
        private readonly findOneCustomer: IFindOneCustomerService,
        private readonly checkFriends: IFriendshipCheckFriends,
    ) { }

    async listFriendship() {
        const listFriendship = await prismaClient.friendship.findMany();
        return listFriendship;
    }

    async listFilterFriendship(id: number) {
        const findedCustomer = await this.findOneCustomer.findOne({ id });
        const listFriendship =
            await this.checkFriends.checkFriends(findedCustomer);
        return listFriendship;
    }
}

export { FriendshipListService };
