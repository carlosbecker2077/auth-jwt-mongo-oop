import bcrypt from 'bcrypt';

export class ComparePasswordUseCase {
    async execute(password: string, hashedPassword: string) {
        const isPasswordCompatible = await bcrypt.compare(
            password,
            hashedPassword
        );
        return isPasswordCompatible;
    }
}
