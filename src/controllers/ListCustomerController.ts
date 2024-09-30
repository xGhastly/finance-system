import { Response } from 'express';
import { ListCustomerService } from '../services/ListCustomerService';

class ListCustomerController {
    constructor(private readonly listService: ListCustomerService) { }

    async handle(res: Response) {
        try {
            const listCostumer = await this.listService.returnList();
            res.send(listCostumer);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message || 'Error to get list',
                });
            }
        }
    }
}

export { ListCustomerController };
