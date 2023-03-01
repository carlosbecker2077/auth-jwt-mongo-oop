import { Request, Response } from 'express';
import { CreateUserUseCase } from '../usecase/user/userCreateUseCase';
import { BadRequestError } from '../helpers/api-erros';
import { UserLoginUseCase } from '../usecase/user/userLoginUseCase';
import { UserGetProfileUseCase } from '../usecase/user/userGetProfileUseCase';
import { userCheckid } from '../usecase/user/userCheckId';
import { UserUpdateUseCase } from '../usecase/user/userUpdateUseCase';
import { UserRemoveUseCase } from '../usecase/user/userRemoveUseCase';

export class UserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) throw new BadRequestError();
        try {
            const userCreate = new CreateUserUseCase();
            const newUser = await userCreate.execute({
                name,
                email,
                password,
            });
            return res.status(201).json({ newUser });
        } catch (e: any) {
            return res.status(400).json({ err: e.message });
        }
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        if (!email || !password) throw new BadRequestError();
        try {
            const userLogin = new UserLoginUseCase();
            const { user, token } = await userLogin.execute(email, password);

            return res.status(200).json({ user, token });
        } catch (e: any) {
            return res.status(400).json({ err: e.message });
        }
    }

    async getProfile(req: Request, res: Response) {
        try {
            const id = userCheckid(req.headers.userId);
            const getProfile = new UserGetProfileUseCase();
            const userProfile = await getProfile.execute(id);
            return res.status(200).json({ userProfile });
        } catch (e: any) {
            return res.status(400).json({ err: e.message });
        }
    }

    async update(req: Request, res: Response) {
        const { name, email, password } = req.body;
        try {
            const id = userCheckid(req.headers.userId);
            const userUpdate = new UserUpdateUseCase();
            const updatedUser = await userUpdate.execute(
                id,
                name,
                email,
                password
            );
            return res.status(200).json({ updatedUser });
        } catch (e: any) {
            return res.status(400).json({ err: e.message });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = userCheckid(req.headers.userId);
            const userRemove = new UserRemoveUseCase();
            const removedUser = await userRemove.execute(id);
            return res.status(200).json({ removedUser });
        } catch (e: any) {
            return res.status(400).json({ err: e.message });
        }
    }
}
