// routes.ts
import { Router, Request, Response } from 'express';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { CreateCustomerService } from './services/CreateCostumerService';

const router = Router();

router.get('/erro', () => {
    throw new Error('Erro de teste');
});

router.post('/create', async (req: Request, res: Response) => {
    const customerService = new CreateCustomerService();
    return new CreateCustomerController(customerService).handle(req, res);
});

export default router;
