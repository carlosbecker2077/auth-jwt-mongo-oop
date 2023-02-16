import { InvalidEmailOrPasswordError } from '../../helpers/api-erros';
import { UserFindMailUseCase } from './findUserEmailUseCase';
import { ComparePasswordUseCase } from './comparePasswordUseCase';
import { SignToken } from '../../utils/utils';

export class UserLoginUseCase {
    async execute(email: string, password: string) {
        const findByEmail = new UserFindMailUseCase();
        const user = await findByEmail.execute(email);
        if (!user || !user[0].password) throw new InvalidEmailOrPasswordError();

        const comparePassword = new ComparePasswordUseCase();
        const isPasswordCompatible = await comparePassword.execute(
            password,
            user[0].password
        );
        if (!isPasswordCompatible) throw new InvalidEmailOrPasswordError();

        const signToken = new SignToken();
        const token = await signToken.execute(user[0].id, '1h');

        // const refreshToken = await saveRefreshToken(user[0].id):

        delete user[0].password;
        return { user, token }; // refreshToken
    }
}
