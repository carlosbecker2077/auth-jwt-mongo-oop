import { taskRepositoryMock, taskRepositoryMockWithError } from './mocks/taskMock';
import { FindTaskByUserIdUseCase } from '../../../src/usecase/tasks/findTaskByUserIdUseCase';
import { NotFoundError } from '../../../src/helpers/api-erros';

describe('example of findTaskByUserIdUseCase', () => {
    const findTaskByUserIdUseCase = new FindTaskByUserIdUseCase(taskRepositoryMock);

    test('should be able to find a task', async () => {
        await findTaskByUserIdUseCase.execute('UserId');
        expect(taskRepositoryMock.findByUserId).toBeCalled();
    });

    test('should not be able to find a task', async () => {
        const findTaskByIdWithError = new FindTaskByUserIdUseCase(taskRepositoryMockWithError);
        await expect(
            findTaskByIdWithError.execute('userid')
        ).rejects.toEqual(new NotFoundError());
    });
});
