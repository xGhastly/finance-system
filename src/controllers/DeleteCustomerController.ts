import { Request, Response } from 'express';
import { DeleteCustomerService } from '../services/DeleteCustomerService';

class DeleteCustomerController {
    constructor(private readonly customerService: DeleteCustomerService) { }

    async handle(req: Request, res: Response) {
        try {
            const { id } = req.query as { id: string };
            const customer = await this.customerService.deleteCustomer({ id });
            res.send(customer);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: 'Erro ao deletar usuario.',
                });
            }
        }
    }
}

export { DeleteCustomerController };
