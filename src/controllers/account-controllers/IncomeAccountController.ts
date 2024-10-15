import { Request, Response } from 'express';
import { IIncomeAccountService } from '../../interfaces/account-interfaces/IIncomeAccountService';

class IncomeAccountController {
    constructor(private readonly incomeService: IIncomeAccountService) { }

    async handle(req: Request, res: Response) {
        const customerId = res.locals.user;
        const { amount, description } = req.body as {
            amount: number;
            description: string;
        };
        try {
            const transaction = await this.incomeService.addIncome(
                customerId.id,
                amount,
                description,
            );

            res.send(transaction);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    message: error.message || 'Algo deu errado',
                });
            }
        }
    }
}

export { IncomeAccountController };
