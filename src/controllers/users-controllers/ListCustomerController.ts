import { Request, Response } from 'express';
import { IListCustomerService } from '../../interfaces/user-interfaces/IListCustomerService';

class ListCustomerController {
    constructor(private readonly listService: IListCustomerService) { }

    async handle(req: Request, res: Response) {
        try {
            const { name, email } = req.query as {
                name: string;
                email: string;
            };
            if (name || email) {
                const filterList = await this.listService.returnFilterList(
                    name,
                    email,
                );

                res.send(filterList);
                return;
            }
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
