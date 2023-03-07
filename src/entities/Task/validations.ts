export class TaskValidations {
    static validateTitle(title: string) {
        if (title.length > 100)
            throw new Error('Title length cannot be more than 100 caracters');
        return true;
    }

    static validateDescription(description: string) {
        if (description.length > 250) return false;
        return true;
    }
}
