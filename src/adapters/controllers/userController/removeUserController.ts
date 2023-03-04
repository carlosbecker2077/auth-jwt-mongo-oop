import { Request, Response } from 'express';
import { RemoveUserUseCase } from '../../../usecase/user/removeUserUseCase';

export class RemoveUserController {
    constructor(private removeUserUseCase: RemoveUserUseCase) {}
    async handle(req: Request, res: Response) {
        const userId = req.headers.userId;
        try {
            await this.removeUserUseCase.execute(userId as string);
            return res.status(200).send();
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
