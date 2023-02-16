import { UserFindByIdUseCase } from './userFindByIdUseCase';

import { NotFoundError } from '../../helpers/api-erros';

export class UserRemoveUseCase {
    async execute(id: string) {
        const findById = new UserFindByIdUseCase();
        const userToRemove = await findById.execute(id);
        if (userToRemove.length === 0) throw new NotFoundError();

        await userToRemove[0].remove();

        return userToRemove[0];
    }
}
