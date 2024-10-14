interface IFriendshipProps {
    id: number;
    status: 'PENDING' | 'ACCEPTED' | 'DECLINED';
    createdAt: Date;
    updatedAt: Date;
    senderId: number;
    receiverId: number;
}

export { IFriendshipProps };
