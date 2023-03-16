import { Request, Response } from 'express';
import { RefreshTokenUseCase } from '../../../usecase/auth/refreshTokenUseCase';

export class RefreshTokenController {
    constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

    async handle(req: Request, res: Response) {
        const { refreshToken } = req.body;
        try {
            const token = this.refreshTokenUseCase.execute(refreshToken);
            return res.status(200).json({ token });
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
