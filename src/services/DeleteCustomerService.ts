import prismaClient from '../prisma';
import { IFindOneCustomerService } from '../interfaces/IFindOneCustomerService';
import { IDeleteCustomerProps } from '../interfaces/IDeleteCustomerProps';

class DeleteCustomerService {
    constructor(private readonly findOneService: IFindOneCustomerService) { }

    async deleteCustomer({ id }: IDeleteCustomerProps) {
        if (!id) {
            throw new Error('Solicitação inválida');
        }

        const findedCustomer = await this.findOneService.findOne({ id });

        await prismaClient.customer.delete({
            where: {
                id: findedCustomer.id,
            },
        });
        return { message: 'Deletado com Sucesso' };
    }
}
export { DeleteCustomerService };
