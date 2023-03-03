import { Request, Response } from 'express';
import { LoginUserUsecase } from '../../../usecase/auth/loginUserUseCase';

export class LoginController {
    constructor(private loginUserUseCase: LoginUserUsecase) {}

    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const token = await this.loginUserUseCase.execute(email, password);
            return res.status(200).json({ token });
        } catch (err: any) {
            return res.status(400).json({ err: err.message });
        }
    }
}
