import { IListAccountService } from '../../interfaces/account-interfaces/IListAccountService';
import { Request, Response } from 'express';
class ListAccountController {
    constructor(private readonly listService: IListAccountService) { }

    async handle(req: Request, res: Response) {
        const { ownerUser } = req.query as unknown as {
            ownerUser: string;
        };
        if (ownerUser) {
            const filterList =
                await this.listService.listFilterAccounts(ownerUser);
            res.send(filterList);
            return;
        }

        const commumList = await this.listService.listAccounts();
        res.send(commumList);
    }
}

export { ListAccountController };
