import { Request, Response } from 'express';
import { IExpenseService } from '../../interfaces/account-interfaces/IExpenseService';

class ExpenseController {
    constructor(private readonly expenseService: IExpenseService) { }

    async handle(req: Request, res: Response) {
        const customerId = res.locals.user;
        const { amount, description, method } = req.body as {
            amount: number;
            description: string;
            method: 'CREDITO' | 'DEBITO' | 'PIX';
        };

        try {
            const transaction = await this.expenseService.addExpense(
                customerId.id,
                amount,
                description,
                method,
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

export { ExpenseController };
