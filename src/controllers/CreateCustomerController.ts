import { Request, Response } from 'express';
import { CreateCustomerService } from '../services/CreateCostumerService';

class CreateCustomerController {
    constructor(private readonly customerService: CreateCustomerService) {}

    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body as {
            name: string;
            email: string;
            password: string;
        };

        try {
            const customer = await this.customerService.execute({
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
