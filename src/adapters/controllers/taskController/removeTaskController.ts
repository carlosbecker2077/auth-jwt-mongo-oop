import { Request, Response } from 'express';
import { RemoveTaskUseCase } from '../../../usecase/tasks/removeTaskUseCase';

export class RemoveTaskController {
    constructor(private removeTaskUseCase: RemoveTaskUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.headers.userId;
        const { taskId } = req.params;
        try {
            await this.removeTaskUseCase.execute(userId as string, taskId);
            return res.status(200).send();
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
