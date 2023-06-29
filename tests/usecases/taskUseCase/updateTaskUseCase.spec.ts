import { taskRepositoryMock, taskRepositoryMockWithError, tasksArrayMock } from './mocks/taskMock';
import { UpdateTaskUseCase } from '../../../src/usecase/tasks/updateTaskUseCase';
import { NotFoundError } from '../../../src/helpers/api-erros';

describe('example of updateTaskUseCase', () => {
    const updateTaskUseCase = new UpdateTaskUseCase(taskRepositoryMock);

    test('should be able to update a task from a user', async () => {
        await updateTaskUseCase.execute(tasksArrayMock[0], 'userid');
        expect(taskRepositoryMock.update).toBeCalled();
    });

    test('should not be able to update a task', async () => {
        const updateTaskWithError = new UpdateTaskUseCase(taskRepositoryMockWithError);
        await expect(
            updateTaskWithError.execute(tasksArrayMock[0], 'userid')
        ).rejects.toEqual(new NotFoundError());
    });
});
