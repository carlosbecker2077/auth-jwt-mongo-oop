import { taskRepositoryMock, taskRepositoryMockWithError } from './mocks/taskMock';
import { FindTaskByTitleUseCase } from '../../../src/usecase/tasks/findTaskByTitleUseCase';
import { NotFoundError } from '../../../src/helpers/api-erros';

describe('example of findTaskBtTitleUseCase', () => {
    const findTaskByTitleUseCase = new FindTaskByTitleUseCase(taskRepositoryMock);

    test('should be able to find a task', async () => {
        await findTaskByTitleUseCase.execute('title', '123');
        expect(taskRepositoryMock.findByTitle).toBeCalled();
    });

    test('should not be able to find a task', async () => {
        const findTaskByIdWithError = new FindTaskByTitleUseCase(taskRepositoryMockWithError);
        await expect(
            findTaskByIdWithError.execute('title', 'userid')
        ).rejects.toEqual(new NotFoundError());
    });
});
