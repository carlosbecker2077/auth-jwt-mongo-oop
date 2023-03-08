import 'dotenv/config';
import jwt, { Secret } from 'jsonwebtoken';
import { JwtPayload } from '../../middlewares/authMiddleware';

export class RefreshTokenUseCase {
    execute(refreshToken: string): string | Error {
        const data = jwt.verify(
            refreshToken,
            process.env.JWT_PASS_REFRESH as Secret
        );
        const { id } = data as JwtPayload;
        const newtoken = jwt.sign({ id }, process.env.JWT_PASS as Secret, {
            expiresIn: '1h',
        });
        return newtoken;
    }
}
