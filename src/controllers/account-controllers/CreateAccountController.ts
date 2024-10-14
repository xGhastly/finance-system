import { Request, Response } from 'express';
import { ICreateAccountService } from '../../interfaces/account-interfaces/ICreateAccountService';

class CreateAccountController {
    constructor(private readonly accountService: ICreateAccountService) { }

    async handle(req: Request, res: Response) {
        const { customerId } = req.body as {
            customerId: number;
        };
        try {
            const createdAccount =
                await this.accountService.createAccount(customerId);
            res.send(createdAccount);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    error: error.message || 'Algo deu errado!',
                });
            }
        }
    }
}

export { CreateAccountController };
