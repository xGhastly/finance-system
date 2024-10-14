import { Request, Response } from 'express';
import { ILoginCustomerService } from '../../interfaces/user-interfaces/ILoginCustomerService';

class LoginCustomerController {
    constructor(private readonly loginService: ILoginCustomerService) { }

    async handle(req: Request, res: Response) {
        const { username, password } = req.body as {
            username: string;
            password: string;
        };

        try {
            const result = await this.loginService.loginCustomer(
                username,
                password,
            );

            res.send(`Login efetuado com sucesso, token: ${result}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
                res.status(401).json({
                    error: error.message,
                });
            }
        }
    }
}

export { LoginCustomerController };
