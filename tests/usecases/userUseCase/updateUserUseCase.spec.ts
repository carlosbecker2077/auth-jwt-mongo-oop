import {
    EmailAlreadyExistsError,
    InvalidValidationEmail,
    InvalidValidationPassword,
    NotFoundError,
} from '../../../src/helpers/api-erros';
import { UpdateUserUseCase } from '../../../src/usecase/user/updateUserUseCase';
import {
    userMock,
    userMockWithId,
    userMockInvalidEmail,
    userMockInvalidPassword,
    userRepositoryMock,
    userRepositoryMockFindByEmail,
    userRepositoryMockUserId,
} from './mocks/userMocks';

describe('example of updateUseCase', () => {
    const updateUserUseCase = new UpdateUserUseCase(userRepositoryMock);

    test('should be able to update a user', async () => {
        await updateUserUseCase.execute(userMock, 'id');
        expect(userRepositoryMock.update).toBeCalled();
    });

    test('should not be able to update a user with the same email and diferent id', async () => {
        const updateUserUseCaseEmailWithSameId = new UpdateUserUseCase(
            userRepositoryMockFindByEmail
        );
        await expect(
            updateUserUseCaseEmailWithSameId.execute(userMockWithId, '54321')
        ).rejects.toEqual(new EmailAlreadyExistsError());
    });

    test('should not be able to update a user with a invalid email', async () => {
        await expect(
            updateUserUseCase.execute(userMockInvalidEmail, 'id')
        ).rejects.toEqual(new InvalidValidationEmail());
    });

    test('should not be able to update a user with a invalid password', async () => {
        await expect(
            updateUserUseCase.execute(userMockInvalidPassword, 'id')
        ).rejects.toEqual(new InvalidValidationPassword());
    });

    test('should not be able to update a user with a duplicated email', async () => {
        const updateUserUseCaseAlreadyExists = new UpdateUserUseCase(
            userRepositoryMockFindByEmail
        );
        await expect(
            updateUserUseCaseAlreadyExists.execute(userMock, 'id')
        ).rejects.toEqual(new EmailAlreadyExistsError());
    });

    test('should not be able to update a user that doesnt exist', async () => {
        const updateUserUseCaseIdDontExists = new UpdateUserUseCase(
            userRepositoryMockUserId
        );
        await expect(
            updateUserUseCaseIdDontExists.execute(userMock, 'id')
        ).rejects.toEqual(new NotFoundError());
    });
});
