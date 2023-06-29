import { taskRepositoryMock } from './mocks/taskMock';
import { FindTaskByIdUseCase } from '../../../src/usecase/tasks/findTaskByIdUseCase';

describe('example of findTaskByIdUseCase', () => {
    const findTaskIdUseCase = new FindTaskByIdUseCase(taskRepositoryMock);

    test('should be able to find a task', async () => {
        await findTaskIdUseCase.execute('1', '321');
        expect(taskRepositoryMock.findById).toBeCalled();
    });

    test('should not be able to find a task', async () => {
        await findTaskIdUseCase.execute('1', '321');
        expect(taskRepositoryMock.findById).toBeCalled();
    });
});
