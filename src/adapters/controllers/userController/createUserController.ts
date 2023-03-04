import { Request, Response } from 'express';
import { IUserRequestDTO } from '../../../usecase/user/UserDTO';
import { CreateUserUseCase } from '../../../usecase/user/createUserUseCase';

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userRequest: IUserRequestDTO = req.body;
        try {
            await this.createUserUseCase.execute(userRequest);
            return res.status(201).send();
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
