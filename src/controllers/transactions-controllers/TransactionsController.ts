import { Request, Response } from 'express';
import { IListTransactionsService } from '../../interfaces/transactions-interfaces/IListTransactionsService';

class ListTransactionsController {
    constructor(private readonly listService: IListTransactionsService) { }

    async handle(req: Request, res: Response) {
        const { ownerUser } = req.query as unknown as {
            ownerUser: string;
        };
        if (ownerUser) {
            const filterList =
                await this.listService.listFilterTransactions(ownerUser);
            res.send(filterList);
            return;
        }

        const commumList = await this.listService.listTransactions();
        res.send(commumList);
    }
}

export { ListTransactionsController };
