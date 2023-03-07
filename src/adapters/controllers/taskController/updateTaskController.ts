import { Request, Response } from 'express';
import { ITaskRequestDTO } from '../../../usecase/tasks/TaskDTO';
import { UpdateTaskUseCase } from '../../../usecase/tasks/updateTaskUseCase';

export class UpdateTaskController {
    constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.headers.userId;
        const taskRequest: ITaskRequestDTO = req.body;
        try {
            await this.updateTaskUseCase.execute(taskRequest, userId as string);
            return res.status(204).send();
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
