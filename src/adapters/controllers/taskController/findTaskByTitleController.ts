import { Request, Response } from 'express';
import { FindTaskByTitleUseCase } from '../../../usecase/tasks/findTaskByTitleUseCase';

export class FindTaskByTitleController {
    constructor(private findTaskByTitleUseCase: FindTaskByTitleUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.headers.userId;
        const { title } = req.params;
        try {
            const task = await this.findTaskByTitleUseCase.execute(
                title,
                userId as string
            );
            return res.status(200).json({ task });
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
