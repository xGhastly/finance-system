import { Router, Request, Response } from 'express';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { CreateCustomerService } from './services/CreateCostumerService';
import { HashPasswordService } from './services/HashPasswordService';
import { ExistingEmailService } from './services/ExistingEmailService';
import { ValidatorService } from './services/ValidatorService';
import { ListCostumerController } from './controllers/ListCostumerController';
import { ListCostumerService } from './services/ListCostumerService';
import { DeleteCustomerService } from './services/DeleteCustomerService';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';
import { FindOneCustomerService } from './services/FindOneCustomerService';

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

router.delete('/delete', async (req: Request, res: Response) => {
    const deleteService = new DeleteCustomerService(
        new FindOneCustomerService(),
    );
    return new DeleteCustomerController(deleteService).handle(req, res);
});

export default router;
