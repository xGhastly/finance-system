import { IListCustomerService } from '../../interfaces/user-interfaces/IListCustomerService';
import prismaClient from '../../prisma';

class ListCustomerService implements IListCustomerService {
    async returnList() {
        const listCostumer = await prismaClient.customer.findMany();
        return listCostumer;
    }

    async returnFilterList(name?: string, username?: string) {
        const filterListCustomer = await prismaClient.customer.findMany({
            where: {
                name: name ? { contains: name } : undefined,
                username: username ? { contains: username } : undefined,
            },
        });
        return filterListCustomer;
    }
}

export { ListCustomerService };
