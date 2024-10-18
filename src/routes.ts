import { Router, Request, Response } from 'express';
import { CreateCustomerController } from './controllers/users-controllers/CreateCustomerController';
import { CreateCustomerService } from './services/user-services/CreateCustomerService';
import { HashPasswordService } from './services/user-services/second-services/HashPasswordService';
import { ExistingEmailService } from './services/user-services/second-services/ExistingEmailService';
import { ValidatorService } from './services/user-services/second-services/ValidatorService';
import { ListCustomerController } from './controllers/users-controllers/ListCustomerController';
import { ListCustomerService } from './services/user-services/ListCustomerService';
import { DeleteCustomerService } from './services/user-services/DeleteCustomerService';
import { DeleteCustomerController } from './controllers/users-controllers/DeleteCustomerController';
import { FindOneCustomerService } from './services/user-services/second-services/FindOneCustomerService';
import { LoginCustomerService } from './services/user-services/LoginCustomerService';
import { JwtService } from './services/user-services/second-services/JwtService';
import { LoginCustomerController } from './controllers/users-controllers/LoginCustomerController';
import { EditCustomerService } from './services/user-services/EditCustomerService';
import { EditCustomerController } from './controllers/users-controllers/EditCustomerController';
import { FriendshipInviteController } from './controllers/friendship-controllers/FriendshipInviteController';
import { FriendshipInviteService } from './services/friendship-services/FriendshipInviteService';
import { FriendshipCheckStatus } from './services/friendship-services/second-services/FriendshipCheckStatus';
import { FindPerUsername } from './services/user-services/second-services/FindPerUsername';
import { FriendshipCheckExisting } from './services/friendship-services/second-services/FriendshipCheckExisting';
import { FriendshipAcceptService } from './services/friendship-services/FriendshipAcceptService';
import { FriendshipChangeStatus } from './services/friendship-services/second-services/FriendshipChangeStatus';
import { FriendshipAcceptController } from './controllers/friendship-controllers/FriendshipAcceptController';
import { FriendshipListService } from './services/friendship-services/FriendshipListService';
import { FriendshipListController } from './controllers/friendship-controllers/FriendshipListController';
import { FriendshipCheckFriends } from './services/friendship-services/second-services/FriendshipCheckFriends';
import { FriendshipDeleteService } from './services/friendship-services/FriendshipDeleteService';
import { FriendshipDeleteController } from './controllers/friendship-controllers/FriendshipDeleteController';
import { CreateAccountService } from './services/account-services/CreateAccountService';
import { CreateAccountController } from './controllers/account-controllers/CreateAccountController';
import { IncomeAccountService } from './services/account-services/IncomeAccountService';
import { HasAccountService } from './services/account-services/second-services/HasAccountService';
import { IncomeAccountController } from './controllers/account-controllers/IncomeAccountController';
import { UpdateBalance } from './services/account-services/second-services/UpdateBalance';
import { ExpenseController } from './controllers/account-controllers/ExpenseController';
import { ExpenseService } from './services/account-services/ExpenseService';
import authMiddleware from './middlewares/authMiddleware';
import { ListAccountService } from './services/account-services/ListAccountService';
import { ListAccountController } from './controllers/account-controllers/ListAccountController';
import { ListTransactionsService } from './services/transactions-services/ListTransactionsService';
import { ListTransactionsController } from './controllers/transactions-controllers/TransactionsController';

const router = Router();

router.post('/customer/create', async (req: Request, res: Response) => {
    const customerService = new CreateCustomerService(
        new ValidatorService(),
        new HashPasswordService(),
        new ExistingEmailService(),
        new FindPerUsername(),
    );
    return new CreateCustomerController(customerService).handle(req, res);
});

router.get('/customer/list', async (req: Request, res: Response) => {
    const listService = new ListCustomerService();
    return new ListCustomerController(listService).handle(req, res);
});

router.delete('/customer/delete/:id', async (req: Request, res: Response) => {
    const deleteService = new DeleteCustomerService(
        new FindOneCustomerService(),
    );
    return new DeleteCustomerController(deleteService).handle(req, res);
});

router.post('/login', async (req: Request, res: Response) => {
    const loginService = new LoginCustomerService(
        new FindPerUsername(),
        new JwtService(),
    );
    return new LoginCustomerController(loginService).handle(req, res);
});

router.put('/customer/edit/:user', async (req: Request, res: Response) => {
    const editService = new EditCustomerService(
        new FindPerUsername(),
        new HashPasswordService(),
        new ValidatorService(),
    );
    return new EditCustomerController(editService).handle(req, res);
});

router.post(
    '/friendship/invite/:receiverUser',
    authMiddleware,
    async (req: Request, res: Response) => {
        const friendInvite = new FriendshipInviteService(
            new FriendshipCheckStatus(),
            new FindPerUsername(),
            new FindOneCustomerService(),
        );
        return new FriendshipInviteController(friendInvite).handle(req, res);
    },
);

router.post(
    '/friendship/response/:senderUsername',
    authMiddleware,
    async (req: Request, res: Response) => {
        const acceptFriend = new FriendshipAcceptService(
            new FriendshipCheckExisting(),
            new FriendshipChangeStatus(),
            new FriendshipCheckStatus(),
            new FindPerUsername(),
        );
        return new FriendshipAcceptController(acceptFriend).handle(req, res);
    },
);

router.get('/friendship/list', async (req: Request, res: Response) => {
    const listFriendship = new FriendshipListService(
        new FindPerUsername(),
        new FriendshipCheckFriends(),
    );
    return new FriendshipListController(listFriendship).handle(req, res);
});

router.post(
    '/friendship/delete',
    authMiddleware,
    async (req: Request, res: Response) => {
        const deleteFriendship = new FriendshipDeleteService(
            new FindPerUsername(),
        );
        return new FriendshipDeleteController(deleteFriendship).handle(
            req,
            res,
        );
    },
);

router.post(
    '/account/create',
    authMiddleware,
    async (req: Request, res: Response) => {
        const accountService = new CreateAccountService(
            new FindOneCustomerService(),
        );
        return new CreateAccountController(accountService).handle(req, res);
    },
);

router.post(
    '/account/income',
    authMiddleware,
    async (req: Request, res: Response) => {
        const incomeService = new IncomeAccountService(
            new HasAccountService(),
            new UpdateBalance(),
        );
        return new IncomeAccountController(incomeService).handle(req, res);
    },
);

router.post(
    '/account/expense',
    authMiddleware,
    async (req: Request, res: Response) => {
        const expenseService = new ExpenseService(
            new HasAccountService(),
            new UpdateBalance(),
        );
        return new ExpenseController(expenseService).handle(req, res);
    },
);

router.get('/account/list', async (req: Request, res: Response) => {
    const listService = new ListAccountService(new FindPerUsername());
    return new ListAccountController(listService).handle(req, res);
});

router.get('/transactions/list', async (req: Request, res: Response) => {
    const listService = new ListTransactionsService(new FindPerUsername());
    return new ListTransactionsController(listService).handle(req, res);
});

export default router;
