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

const router = Router();

router.post('/create', async (req: Request, res: Response) => {
    const customerService = new CreateCustomerService(
        new ValidatorService(),
        new HashPasswordService(),
        new ExistingEmailService(),
        new FindPerUsername(),
    );
    return new CreateCustomerController(customerService).handle(req, res);
});

router.get('/usuarios', async (req: Request, res: Response) => {
    const listService = new ListCustomerService();
    return new ListCustomerController(listService).handle(req, res);
});

router.delete('/delete', async (req: Request, res: Response) => {
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

router.put('/edit', async (req: Request, res: Response) => {
    const editService = new EditCustomerService(
        new FindOneCustomerService(),
        new HashPasswordService(),
        new ValidatorService(),
    );
    return new EditCustomerController(editService).handle(req, res);
});

router.post('/friend-invite', async (req: Request, res: Response) => {
    const friendInvite = new FriendshipInviteService(
        new FriendshipCheckStatus(),
    );
    return new FriendshipInviteController(friendInvite).handle(req, res);
});

router.post('/friend-accept', async (req: Request, res: Response) => {
    const acceptFriend = new FriendshipAcceptService(
        new FriendshipCheckExisting(),
        new FriendshipChangeStatus(),
        new FriendshipCheckStatus(),
    );
    return new FriendshipAcceptController(acceptFriend).handle(req, res);
});

router.get('/friend-list', async (req: Request, res: Response) => {
    const listFriendship = new FriendshipListService(
        new FriendshipCheckExisting(),
        new FindOneCustomerService(),
        new FriendshipCheckFriends(),
    );
    return new FriendshipListController(listFriendship).handle(req, res);
});

router.post('/friend-delete', async (req: Request, res: Response) => {
    const deleteFriendship = new FriendshipDeleteService();
    return new FriendshipDeleteController(deleteFriendship).handle(req, res);
});

router.post('/account-create', async (req: Request, res: Response) => {
    const accountService = new CreateAccountService(
        new FindOneCustomerService(),
    );
    return new CreateAccountController(accountService).handle(req, res);
});
export default router;
