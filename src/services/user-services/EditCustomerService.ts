import { IEditCustomerService } from '../../interfaces/user-interfaces/IEditCustomerService';
import { IFindOneCustomerService } from '../../interfaces/user-interfaces/IFindOneCustomerService';
import bcrypt from 'bcrypt';

import prismaClient from '../../prisma';
import { IHashPasswordService } from '../../interfaces/user-interfaces/IHashPasswordService';
import { IValidatorService } from '../../interfaces/user-interfaces/IValidatorService';
import { ICreateCustomerProps } from '../../interfaces/user-interfaces/props/ICreateCustomerProps';

class EditCustomerService implements IEditCustomerService {
    constructor(
        private readonly findOneCustomer: IFindOneCustomerService,
        private readonly hashPassword: IHashPasswordService,
        private readonly validatorService: IValidatorService<ICreateCustomerProps>,
    ) { }

    async editCustomer(
        id: number,
        username: string,
        name: string,
        email: string,
        password: string,
        newPassword: string,
    ) {
        this.validatorService.validate({
            username,
            name,
            email,
            password: newPassword,
        });
        const findedCustomer = await this.findOneCustomer.findOne({ id });
        if (!findedCustomer) {
            throw new Error('Usuário não encontrado');
        }

        if (!bcrypt.compareSync(password, findedCustomer.password)) {
            throw new Error('Senha atual inválida');
        }

        const newCustomerPassword = await this.hashPassword.hashPassword(
            newPassword,
            10,
        );

        const editedCustomer = await prismaClient.customer.update({
            where: { id: findedCustomer.id },
            data: { username, name, email, password: newCustomerPassword },
        });

        return editedCustomer;
    }
}

export { EditCustomerService };
