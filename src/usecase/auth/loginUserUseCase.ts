import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IUserRepository } from '../../repositories/interfaces/userRepository';
import { IToken } from './interface';
import { UserValidation } from '../../entities/User/validations';
import { UserPassword } from '../../entities/User/password';
import {
    InvalidEmailOrPasswordError,
    UnauthorizedError,
} from '../../helpers/api-erros';

export class LoginUserUsecase {
    constructor(private userRepository: IUserRepository) {}

    async execute(email: string, password: string): Promise<IToken> {
        if (!UserValidation.validationEmail(email))
            throw new InvalidEmailOrPasswordError();
        if (!UserValidation.validationPassword(password))
            throw new InvalidEmailOrPasswordError();

        const user = await this.userRepository.findByEmail(email);
        if (!user) throw new InvalidEmailOrPasswordError();

        const isValidPassowrd = await UserPassword.comparePassword(
            user?.password,
            password
        );
        if (!isValidPassowrd) throw new UnauthorizedError();

        const accessToken = jwt.sign(
            { id: user.id },
            process.env.JWT_PASS as string,
            { expiresIn: '1h' }
        );
        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.JWT_PASS_REFRESH as string,
            { expiresIn: '1d' }
        );

        return { accessToken, refreshToken };
    }
}
