import { Request, Response } from 'express';
import { LoginCustomerService } from '../services/LoginCustomerService';

class LoginCustomerController {
    constructor(private readonly loginService: LoginCustomerService) { }

    async handle(req: Request, res: Response) {
        const { email, password } = req.body as {
            email: string;
            password: string;
        };

        try {
            const result = await this.loginService.loginCustomer(
                email,
                password,
            );

            res.send(`Login efetuado com sucesso, token: ${result}`);
        } catch (error) {
            if (error instanceof Error)
                res.status(401).json({
                    error: error.message,
                });
        }
    }
}

export { LoginCustomerController };
