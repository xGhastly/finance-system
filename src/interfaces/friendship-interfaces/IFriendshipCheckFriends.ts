import { ICustomerProps } from '../user-interfaces/props/ICustomerProps';
import { IFriendshipProps } from './props/IFriendshipProps';

interface IFriendshipCheckFriends {
    checkFriends(findedCustomer: ICustomerProps): Promise<IFriendshipProps[]>;
}
export { IFriendshipCheckFriends };
