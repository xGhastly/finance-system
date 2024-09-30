import { Response } from 'express';
import { ListCostumerService } from '../services/ListCostumerService';

class ListCostumerController {
    constructor(private readonly listService: ListCostumerService) {}

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

export { ListCostumerController };
