import { FindUserByIdUseCase } from '../../../src/usecase/user/findUserByIdUseCase';
import { userMock, userRepositoryMock } from './mocks/userMocks';

describe('example of find user by id', () => {
    const findUserByIdUseCase = new FindUserByIdUseCase(userRepositoryMock);

    test('should be able to find a user', async () => {
        const userReturn = await findUserByIdUseCase.execute(
            userMock.id as string
        );
        expect(userReturn).toEqual({
            name: 'Placeholder name',
            email: 'placeholder@email.com',
            password: 'password321',
        });
    });
});
