import { UserFindMailUseCase } from "./findUserEmailUseCase";

export class UserLoginUseCase {
    async execute(email: string, password: string) {
        const findByEmail = new UserFindMailUseCase();
        const user = async findByEmail.execute(email)
    }
}