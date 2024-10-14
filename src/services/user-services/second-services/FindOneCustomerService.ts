import { IDeleteCustomerProps } from '../../../interfaces/user-interfaces/props/IDeleteCustomerProps';
import { IFindOneCustomerService } from '../../../interfaces/user-interfaces/IFindOneCustomerService';
import prismaClient from '../../../prisma';

class FindOneCustomerService implements IFindOneCustomerService {
    async findOne({ id }: IDeleteCustomerProps) {
        if (!id) {
            throw new Error('Insira um id');
        }
        if (typeof id === 'string' && !/^\d+$/.test(id)) {
            throw new Error('ID deve ser um valor numérico');
        }

        const numericId = Number(id);
        const findedCustomer = await prismaClient.customer.findFirst({
            where: {
                id: numericId,
            },
        });
        if (!findedCustomer) {
            throw new Error('Cliente não existe');
        }
        return findedCustomer;
    }
}

export { FindOneCustomerService };
