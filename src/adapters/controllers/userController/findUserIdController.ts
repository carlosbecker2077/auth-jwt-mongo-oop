import { Request, Response } from 'express';
import { FindUserByIdUseCase } from '../../../usecase/user/findUserByIdUseCase';

export class FindUserByIdController {
    constructor(private findUserByIdUseCase: FindUserByIdUseCase) {}
    async handle(req: Request, res: Response) {
        const userId = req.headers.userId;
        try {
            const user = await this.findUserByIdUseCase.execute(
                userId as string
            );
            user.password = undefined;
            return res.status(200).json({ user });
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
