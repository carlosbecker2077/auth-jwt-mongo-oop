import {
    EmailAlreadyExistsError,
    InvalidValidationEmail,
    InvalidValidationPassword,
} from '../../../src/helpers/api-erros';
import { CreateUserUseCase } from '../../../src/usecase/user/createUserUseCase';
import {
    userMock,
    userMockInvalidEmail,
    userMockInvalidPassword,
    userRepositoryMock,
    userRepositoryMockFindByEmail,
} from './mocks/userMocks';

describe('example of creatUserUseCase', () => {
    const createUserUseCase = new CreateUserUseCase(userRepositoryMock);

    test('should be able to create a user', async () => {
        await createUserUseCase.execute(userMock);
        expect(userRepositoryMock.save).toBeCalled();
    });

    test('should not be able to create a user with a invalid email', async () => {
        await expect(
            createUserUseCase.execute(userMockInvalidEmail)
        ).rejects.toEqual(new InvalidValidationEmail());
    });

    test('should not be able to create a user with a invalid password', async () => {
        await expect(
            createUserUseCase.execute(userMockInvalidPassword)
        ).rejects.toEqual(new InvalidValidationPassword());
    });

    test('should not be able to create a user with a duplicated email', async () => {
        const createUserUseCaseAlreadyExists = new CreateUserUseCase(
            userRepositoryMockFindByEmail
        );
        await expect(
            createUserUseCaseAlreadyExists.execute(userMock)
        ).rejects.toEqual(new EmailAlreadyExistsError());
    });

    test('should not be able to create a user with a duplicated email', async () => {
        const createUserUseCaseAlreadyExists = new CreateUserUseCase(
            userRepositoryMockFindByEmail
        );
        await expect(
            createUserUseCaseAlreadyExists.execute(userMock)
        ).rejects.toEqual(new EmailAlreadyExistsError());
    });
});
