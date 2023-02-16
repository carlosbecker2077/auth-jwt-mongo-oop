import jwt from 'jsonwebtoken';
import 'dotenv/config';

export class SignToken {
    async execute(id: string, expiresIn: string) {
        if (!process.env.JWT_PASS) {
            console.log('JWT payload not provided');
            throw new Error('JWT payload not provided');
        }

        const token = jwt.sign({ id }, process.env.JWT_PASS, {
            expiresIn,
        });
        return token;
    }
}
