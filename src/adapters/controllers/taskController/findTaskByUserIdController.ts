import { Request, Response } from 'express';
import { FindTaskByUserIdUseCase } from '../../../usecase/tasks/findTaskByUserIdUseCase';

export class FindTaskByUserIdController {
    constructor(private findTaskByUserIdUseCase: FindTaskByUserIdUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.headers.userId;
        try {
            const task = await this.findTaskByUserIdUseCase.execute(
                userId as string
            );
            return res.status(200).json({ task });
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
