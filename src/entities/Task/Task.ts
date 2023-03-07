import { uuid } from 'uuidv4';
import { TaskValidations } from './validations';

export class Task {
    public readonly id: string;

    public title: string;
    public description: string;
    public done: boolean;
    public userId: string;
    public updatedAt: Date;

    constructor(
        title: string,
        description: string,
        done: boolean,
        userId: string,
        id?: string,
        updatedAt?: Date
    ) {
        this.title = title;
        this.description = description;
        this.done = done;
        this.userId = userId;
        this.id = !id ? uuid() : id;
        this.updatedAt = updatedAt as Date;

        if (!TaskValidations.validateTitle(title)) {
            throw new Error('Title length cannot be more than 100 caracters.');
        }
        if (!TaskValidations.validateDescription(description)) {
            throw new Error(
                'Description length cannot be more than 250 caracters.'
            );
        }
    }
}
