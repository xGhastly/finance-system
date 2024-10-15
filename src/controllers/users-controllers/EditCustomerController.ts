import { Request, Response } from 'express';
import { IEditCustomerService } from '../../interfaces/user-interfaces/IEditCustomerService';

class EditCustomerController {
    constructor(private readonly editCustomer: IEditCustomerService) { }

    async handle(req: Request, res: Response) {
        try {
            const username = req.params.user;
            const { name, email, password, newPassword } = req.body as {
                name: string;
                email: string;
                password: string;
                newPassword?: string;
            };
            const editedCustomer = await this.editCustomer.editCustomer(
                username,
                name,
                email,
                password,
                newPassword || '',
            );
            res.send(editedCustomer);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message || 'Error to edit customer',
                });
            }
        }
    }
}

export { EditCustomerController };
