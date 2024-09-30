import { IListCustomerService } from '../interfaces/IListCustomerService';
import prismaClient from '../prisma';

class ListCustomerService implements IListCustomerService {
    async returnList() {
        const listCostumer = await prismaClient.customer.findMany();
        return listCostumer;
    }
}

export { ListCustomerService };
