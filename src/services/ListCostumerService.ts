import { IListCostumeService } from '../interfaces/IListCostumerService';
import prismaClient from '../prisma';

class ListCostumerService implements IListCostumeService {
    async returnList() {
        const listCostumer = await prismaClient.customer.findMany();
        return listCostumer;
    }
}

export { ListCostumerService };
