import { taskRepositoryMock, taskRepositoryMockWithError } from './mocks/taskMock';
import { RemoveTaskUseCase } from '../../../src/usecase/tasks/removeTaskUseCase';
import { NotFoundError } from '../../../src/helpers/api-erros';

describe('example of removeTaskUseCase', () => {
    const removeTaskUseCase = new RemoveTaskUseCase(taskRepositoryMock);

    test('should be able to remove all tasks from a user', async () => {
        await removeTaskUseCase.execute('UserId');
        expect(taskRepositoryMock.remove).toBeCalled();
    });

    test('should be able to remove a task', async () => {
        await removeTaskUseCase.execute('UserId', 'taskid');
        expect(taskRepositoryMock.remove).toBeCalled();
    });

    test('should not be able to remove a task', async () => {
        const removeTaskWithError = new RemoveTaskUseCase(taskRepositoryMockWithError);
        await expect(
            removeTaskWithError.execute('userid')
        ).rejects.toEqual(new NotFoundError());
    });
});
