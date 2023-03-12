import { Request, Response } from 'express';
import { RefreshTokenUseCase } from '../../../usecase/auth/refreshTokenUseCase';

export class RefreshTokenController {
    constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

    async handle(req: Request, res: Response) {
        const token = req.body;
        try {
            const refreshToken = this.refreshTokenUseCase.execute(token);
            return res.status(200).json({ refreshToken });
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
