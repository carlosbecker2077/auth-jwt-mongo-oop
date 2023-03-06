import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../helpers/api-erros';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { findUserByIdUseCase } from '../usecase/index';

type JwtPayload = {
    id: string;
};

export async function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new UnauthorizedError();
    }

    const token = authorization.split(' ')[1];

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload;

    try {
        // const user = await UserSchema.findOne({ _id: id });
        const user = await findUserByIdUseCase.execute(id);
        if (!user) {
            throw new UnauthorizedError();
        }

        user.password = undefined;
        req.headers.userId = id;

        next();
    } catch (e: any) {
        return res.status(400).json({ err: e.message });
    }
}
