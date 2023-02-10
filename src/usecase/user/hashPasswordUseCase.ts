import bcrypt from 'bcrypt';

export class HashPassword {
    async execute(password: string, salt: number) {
        const hashPassword = bcrypt.hash(password, salt);
        return hashPassword;
    }
}
