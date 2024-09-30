import { Router, Request, Response } from 'express';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { CreateCustomerService } from './services/CreateCostumerService';
import { HashPasswordService } from './services/HashPasswordService';
import { ExistingEmailService } from './services/ExistingEmailService';
import { ValidatorService } from './services/ValidatorService';
import { ListCostumerController } from './controllers/ListCostumerController';
import { ListCostumerService } from './services/ListCostumerService';

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
    const listService = new ListCostumerService();
    return new ListCostumerController(listService).handle(res);
});

export default router;
