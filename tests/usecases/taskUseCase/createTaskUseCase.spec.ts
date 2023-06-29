import { taskRepositoryMock, tasksArrayMock } from './mocks/taskMock';
import { CreateTaskUseCase } from '../../../src/usecase/tasks/createTaskUseCase';

describe('example of createTaskUseCase', () => {
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMock);

    test('should be able to create a task', async () => {
        await createTaskUseCase.execute(tasksArrayMock[0], '123');
        expect(taskRepositoryMock.save).toBeCalled();
    });
});
