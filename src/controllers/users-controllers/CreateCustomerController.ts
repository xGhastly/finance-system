import { Request, Response } from 'express';
import { ICreateCustomerService } from '../../interfaces/user-interfaces/ICreateCustomerService';

class CreateCustomerController {
    constructor(private readonly customerService: ICreateCustomerService) { }

    async handle(req: Request, res: Response) {
        const { username, name, email, password } = req.body as {
            username: string;
            name: string;
            email: string;
            password: string;
        };

        try {
            const customer = await this.customerService.createCustomer({
                username,
                name,
                email,
                password,
            });
            res.send(customer);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: error.message || 'Algo deu errado!',
                });
            }
        }
    }
}
export { CreateCustomerController };
