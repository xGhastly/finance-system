import prismaClient from '../../prisma';
import { IFindOneCustomerService } from '../../interfaces/user-interfaces/IFindOneCustomerService';
import { IDeleteCustomerProps } from '../../interfaces/user-interfaces/props/IDeleteCustomerProps';

class DeleteCustomerService {
    constructor(private readonly findOneService: IFindOneCustomerService) { }

    async deleteCustomer({ id }: IDeleteCustomerProps) {
        if (!id) {
            throw new Error('Solicitação inválida');
        }

        const findedCustomer = await this.findOneService.findOne({ id });

        await prismaClient.customer.delete({
            where: {
                id: Number(findedCustomer.id),
            },
        });
        return { message: 'Deletado com Sucesso' };
    }
}
export { DeleteCustomerService };
