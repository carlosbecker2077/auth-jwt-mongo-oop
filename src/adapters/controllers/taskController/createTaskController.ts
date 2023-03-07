import { Request, Response } from 'express';
import { ITaskRequestDTO } from '../../../usecase/tasks/TaskDTO';
import { CreateTaskUseCase } from '../../../usecase/tasks/createTaskUseCase';

export class CreateTaskController {
    constructor(private createTaskUseCase: CreateTaskUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.headers.userId;
        const taskRequest: ITaskRequestDTO = req.body;
        try {
            await this.createTaskUseCase.execute(taskRequest, userId as string);
            return res.status(201).send();
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
