import { Request, Response } from 'express';
import { IDeleteCustomerService } from '../../interfaces/user-interfaces/IDeleteCustomerService';

class DeleteCustomerController {
    constructor(private readonly customerService: IDeleteCustomerService) { }

    async handle(req: Request, res: Response) {
        try {
            const { id } = req.query as unknown as { id: number };
            const customer = await this.customerService.deleteCustomer({ id });
            res.send(customer);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: error.message || 'Erro ao deletar usuario.',
                });
            }
        }
    }
}

export { DeleteCustomerController };
