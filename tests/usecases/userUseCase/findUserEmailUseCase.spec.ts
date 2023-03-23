import { FindUserMailUseCase } from '../../../src/usecase/user/findUserEmailUseCase';
import { userMock, userRepositoryMockFindByEmail } from './mocks/userMocks';

describe('example of find user by email', () => {
    const findUserByEmailUseCase = new FindUserMailUseCase(
        userRepositoryMockFindByEmail
    );

    test('should be able to find a user', async () => {
        const userReturn = await findUserByEmailUseCase.execute(
            userMock.email as string
        );
        expect(userReturn).toEqual({
            id: '12345',
            name: 'Placeholder name',
            email: 'placeholder@email.com',
            password: 'password321',
        });
    });
});
