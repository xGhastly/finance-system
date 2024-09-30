import { Router, Request, Response } from 'express';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { CreateCustomerService } from './services/CreateCustomerService';
import { HashPasswordService } from './services/secondary-services/HashPasswordService';
import { ExistingEmailService } from './services/secondary-services/ExistingEmailService';
import { ValidatorService } from './services/secondary-services/ValidatorService';
import { ListCustomerController } from './controllers/ListCustomerController';
import { ListCustomerService } from './services/ListCustomerService';
import { DeleteCustomerService } from './services/DeleteCustomerService';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';
import { FindOneCustomerService } from './services/secondary-services/FindOneCustomerService';
import { LoginCustomerService } from './services/LoginCustomerService';
import { JwtService } from './services/secondary-services/JwtService';
import { LoginCustomerController } from './controllers/LoginCustomerController';

const router = Router();

router.post('/create', async (req: Request, res: Response) => {
    const customerService = new CreateCustomerService(
        new ValidatorService(),
        new HashPasswordService(),
        new ExistingEmailService(),
    );
    return new CreateCustomerController(customerService).handle(req, res);
});

router.get('/list', async (req: Request, res: Response) => {
    const listService = new ListCustomerService();
    return new ListCustomerController(listService).handle(res);
});

router.delete('/delete', async (req: Request, res: Response) => {
    const deleteService = new DeleteCustomerService(
        new FindOneCustomerService(),
    );
    return new DeleteCustomerController(deleteService).handle(req, res);
});

router.post('/login', async (req: Request, res: Response) => {
    const loginService = new LoginCustomerService(
        new ExistingEmailService(),
        new JwtService(),
    );
    return new LoginCustomerController(loginService).handle(req, res);
});

export default router;
