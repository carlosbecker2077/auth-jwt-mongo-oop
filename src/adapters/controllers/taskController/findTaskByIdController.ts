import { Request, Response } from 'express';
import { FindTaskByIdUseCase } from '../../../usecase/tasks/findTaskByIdUseCase';

export class FindTaskByIdController {
    constructor(private findTaskByIdUseCase: FindTaskByIdUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.headers.userId;
        const { taskId } = req.params;
        try {
            const task = await this.findTaskByIdUseCase.execute(
                taskId,
                userId as string
            );
            return res.status(200).json({ task });
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
