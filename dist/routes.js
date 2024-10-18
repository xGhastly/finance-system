"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateCustomerController_1 = require("./controllers/users-controllers/CreateCustomerController");
const CreateCustomerService_1 = require("./services/user-services/CreateCustomerService");
const HashPasswordService_1 = require("./services/user-services/second-services/HashPasswordService");
const ExistingEmailService_1 = require("./services/user-services/second-services/ExistingEmailService");
const ValidatorService_1 = require("./services/user-services/second-services/ValidatorService");
const ListCustomerController_1 = require("./controllers/users-controllers/ListCustomerController");
const ListCustomerService_1 = require("./services/user-services/ListCustomerService");
const DeleteCustomerService_1 = require("./services/user-services/DeleteCustomerService");
const DeleteCustomerController_1 = require("./controllers/users-controllers/DeleteCustomerController");
const FindOneCustomerService_1 = require("./services/user-services/second-services/FindOneCustomerService");
const LoginCustomerService_1 = require("./services/user-services/LoginCustomerService");
const JwtService_1 = require("./services/user-services/second-services/JwtService");
const LoginCustomerController_1 = require("./controllers/users-controllers/LoginCustomerController");
const EditCustomerService_1 = require("./services/user-services/EditCustomerService");
const EditCustomerController_1 = require("./controllers/users-controllers/EditCustomerController");
const FriendshipInviteController_1 = require("./controllers/friendship-controllers/FriendshipInviteController");
const FriendshipInviteService_1 = require("./services/friendship-services/FriendshipInviteService");
const FriendshipCheckStatus_1 = require("./services/friendship-services/second-services/FriendshipCheckStatus");
const FindPerUsername_1 = require("./services/user-services/second-services/FindPerUsername");
const FriendshipCheckExisting_1 = require("./services/friendship-services/second-services/FriendshipCheckExisting");
const FriendshipAcceptService_1 = require("./services/friendship-services/FriendshipAcceptService");
const FriendshipChangeStatus_1 = require("./services/friendship-services/second-services/FriendshipChangeStatus");
const FriendshipAcceptController_1 = require("./controllers/friendship-controllers/FriendshipAcceptController");
const FriendshipListService_1 = require("./services/friendship-services/FriendshipListService");
const FriendshipListController_1 = require("./controllers/friendship-controllers/FriendshipListController");
const FriendshipCheckFriends_1 = require("./services/friendship-services/second-services/FriendshipCheckFriends");
const FriendshipDeleteService_1 = require("./services/friendship-services/FriendshipDeleteService");
const FriendshipDeleteController_1 = require("./controllers/friendship-controllers/FriendshipDeleteController");
const CreateAccountService_1 = require("./services/account-services/CreateAccountService");
const CreateAccountController_1 = require("./controllers/account-controllers/CreateAccountController");
const IncomeAccountService_1 = require("./services/account-services/IncomeAccountService");
const HasAccountService_1 = require("./services/account-services/second-services/HasAccountService");
const IncomeAccountController_1 = require("./controllers/account-controllers/IncomeAccountController");
const UpdateBalance_1 = require("./services/account-services/second-services/UpdateBalance");
const ExpenseController_1 = require("./controllers/account-controllers/ExpenseController");
const ExpenseService_1 = require("./services/account-services/ExpenseService");
const authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
const ListAccountService_1 = require("./services/account-services/ListAccountService");
const ListAccountController_1 = require("./controllers/account-controllers/ListAccountController");
const ListTransactionsService_1 = require("./services/transactions-services/ListTransactionsService");
const TransactionsController_1 = require("./controllers/transactions-controllers/TransactionsController");
const router = (0, express_1.Router)();
router.post('/customer/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerService = new CreateCustomerService_1.CreateCustomerService(new ValidatorService_1.ValidatorService(), new HashPasswordService_1.HashPasswordService(), new ExistingEmailService_1.ExistingEmailService(), new FindPerUsername_1.FindPerUsername());
    return new CreateCustomerController_1.CreateCustomerController(customerService).handle(req, res);
}));
router.get('/customer/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listService = new ListCustomerService_1.ListCustomerService();
    return new ListCustomerController_1.ListCustomerController(listService).handle(req, res);
}));
router.delete('/customer/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteService = new DeleteCustomerService_1.DeleteCustomerService(new FindOneCustomerService_1.FindOneCustomerService());
    return new DeleteCustomerController_1.DeleteCustomerController(deleteService).handle(req, res);
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginService = new LoginCustomerService_1.LoginCustomerService(new FindPerUsername_1.FindPerUsername(), new JwtService_1.JwtService());
    return new LoginCustomerController_1.LoginCustomerController(loginService).handle(req, res);
}));
router.put('/customer/edit/:user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const editService = new EditCustomerService_1.EditCustomerService(new FindPerUsername_1.FindPerUsername(), new HashPasswordService_1.HashPasswordService(), new ValidatorService_1.ValidatorService());
    return new EditCustomerController_1.EditCustomerController(editService).handle(req, res);
}));
router.post('/friendship/invite/:receiverUser', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const friendInvite = new FriendshipInviteService_1.FriendshipInviteService(new FriendshipCheckStatus_1.FriendshipCheckStatus(), new FindPerUsername_1.FindPerUsername(), new FindOneCustomerService_1.FindOneCustomerService());
    return new FriendshipInviteController_1.FriendshipInviteController(friendInvite).handle(req, res);
}));
router.post('/friendship/response/:senderUsername', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const acceptFriend = new FriendshipAcceptService_1.FriendshipAcceptService(new FriendshipCheckExisting_1.FriendshipCheckExisting(), new FriendshipChangeStatus_1.FriendshipChangeStatus(), new FriendshipCheckStatus_1.FriendshipCheckStatus(), new FindPerUsername_1.FindPerUsername());
    return new FriendshipAcceptController_1.FriendshipAcceptController(acceptFriend).handle(req, res);
}));
router.get('/friendship/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listFriendship = new FriendshipListService_1.FriendshipListService(new FindPerUsername_1.FindPerUsername(), new FriendshipCheckFriends_1.FriendshipCheckFriends());
    return new FriendshipListController_1.FriendshipListController(listFriendship).handle(req, res);
}));
router.post('/friendship/delete', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteFriendship = new FriendshipDeleteService_1.FriendshipDeleteService(new FindPerUsername_1.FindPerUsername());
    return new FriendshipDeleteController_1.FriendshipDeleteController(deleteFriendship).handle(req, res);
}));
router.post('/account/create', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accountService = new CreateAccountService_1.CreateAccountService(new FindOneCustomerService_1.FindOneCustomerService());
    return new CreateAccountController_1.CreateAccountController(accountService).handle(req, res);
}));
router.post('/account/income', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const incomeService = new IncomeAccountService_1.IncomeAccountService(new HasAccountService_1.HasAccountService(), new UpdateBalance_1.UpdateBalance());
    return new IncomeAccountController_1.IncomeAccountController(incomeService).handle(req, res);
}));
router.post('/account/expense', authMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expenseService = new ExpenseService_1.ExpenseService(new HasAccountService_1.HasAccountService(), new UpdateBalance_1.UpdateBalance());
    return new ExpenseController_1.ExpenseController(expenseService).handle(req, res);
}));
router.get('/account/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listService = new ListAccountService_1.ListAccountService(new FindPerUsername_1.FindPerUsername());
    return new ListAccountController_1.ListAccountController(listService).handle(req, res);
}));
router.get('/transactions/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listService = new ListTransactionsService_1.ListTransactionsService(new FindPerUsername_1.FindPerUsername());
    return new TransactionsController_1.ListTransactionsController(listService).handle(req, res);
}));
exports.default = router;
