import { Router, Request, Response } from 'express';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { CreateCustomerService } from './services/CreateCostumerService';
import { HashPasswordService } from './services/HashPasswordService';
import { ExistingEmailService } from './services/ExistingEmailService';
import { ValidatorService } from './services/ValidatorService';

const router = Router();

router.post('/create', async (req: Request, res: Response) => {
    const customerService = new CreateCustomerService(
        new ValidatorService(),
        new HashPasswordService(),
        new ExistingEmailService(),
    );
    return new CreateCustomerController(customerService).handle(req, res);
});

export default router;
