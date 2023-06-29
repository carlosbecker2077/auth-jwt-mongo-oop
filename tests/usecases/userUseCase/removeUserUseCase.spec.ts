import { RemoveUserUseCase } from '../../../src/usecase/user/removeUserUseCase';
import {
    userRepositoryMock,
    userRepositoryMockWithError,
} from './mocks/userMocks';
import {
    taskRepositoryMock,
    taskRepositoryMockWithError,
} from '../taskUseCase/mocks/taskMock';
import { NotFoundError } from '../../../src/helpers/api-erros';

describe('delete User example ', () => {
    const deleteUserUseCase = new RemoveUserUseCase(
        userRepositoryMock,
        taskRepositoryMock
    );

    test('shoud be able remove user', async () => {
        await deleteUserUseCase.execute('userid');
        expect(taskRepositoryMock.remove).toBeCalled();
    });
    test('shoud not be able remove user with not found error', async () => {
        const deleteTaskUseCaseWithError = new RemoveUserUseCase(
            userRepositoryMockWithError,
            taskRepositoryMockWithError
        );
        await expect(
            deleteTaskUseCaseWithError.execute('userId')
        ).rejects.toEqual(new NotFoundError());
    });
});
