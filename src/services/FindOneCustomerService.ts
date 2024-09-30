import { IDeleteCustomerProps } from '../interfaces/IDeleteCustomerProps';
import { IFindOneCustomerService } from '../interfaces/IFindOneCustomerService';
import prismaClient from '../prisma';

class FindOneCustomerService implements IFindOneCustomerService {
    async findOne({ id }: IDeleteCustomerProps) {
        const findedCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id,
            },
        });
        if (!findedCustomer) {
            throw new Error('Cliente não existe');
        }
        return findedCustomer;
    }
}

export { FindOneCustomerService };
