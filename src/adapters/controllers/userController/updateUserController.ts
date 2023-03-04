import { Request, Response } from 'express';
import { IUserRequestDTO } from '../../../usecase/user/UserDTO';
import { UpdateUserUseCase } from '../../../usecase/user/updateUserUseCase';

export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {}
    async handle(req: Request, res: Response) {
        const token = req.headers.userId;
        const userData: IUserRequestDTO = req.body;
        try {
            await this.updateUserUseCase.execute(userData, token as string);
            return res.status(200).send();
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
