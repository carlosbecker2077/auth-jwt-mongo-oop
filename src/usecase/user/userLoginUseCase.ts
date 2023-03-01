import { InvalidEmailOrPasswordError } from '../../helpers/api-erros';
import { UserFindMailUseCase } from './findUserEmailUseCase';
import { ComparePasswordUseCase } from './comparePasswordUseCase';
import { SignToken } from '../../utils/utils';

export class UserLoginUseCase {
    async execute(email: string, password: string) {
        const findByEmail = new UserFindMailUseCase();
        const user = await findByEmail.execute(email);
        if (!user || !user?.password) throw new InvalidEmailOrPasswordError();
        const comparePassword = new ComparePasswordUseCase();
        const isPasswordCompatible = await comparePassword.execute(
            password,
            user?.password
        );

        if (!isPasswordCompatible) throw new InvalidEmailOrPasswordError();

        const signToken = new SignToken();
        const token = await signToken.execute(user.id, '1h');

        // const refreshToken = await saveRefreshToken(user[0].id):

        delete user.password;
        return { user, token }; // refreshToken
    }
}
