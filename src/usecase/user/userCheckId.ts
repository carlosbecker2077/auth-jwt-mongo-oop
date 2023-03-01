import { UnauthorizedError } from '../../helpers/api-erros';

export function userCheckid(id: any) {
    if (!id) {
        throw new UnauthorizedError();
    }

    return id;
}
