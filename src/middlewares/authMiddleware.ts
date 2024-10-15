import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IPayLoadProps } from '../interfaces/user-interfaces/props/IPayLoadProps';

const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided.' });
        return;
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!,
        ) as IPayLoadProps;

        if (!decoded || !decoded.id) {
            res.status(400).json({ message: 'Invalid token payload.' });
            return;
        }

        res.locals.user = decoded;
        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'Token expired.' });
        } else if (err instanceof jwt.JsonWebTokenError) {
            res.status(400).json({ message: 'Invalid token.' });
        } else {
            res.status(500).json({ message: 'Internal server error.' });
        }
        return;
    }
};

export default authMiddleware;
