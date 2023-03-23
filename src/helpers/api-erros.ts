export class ApiError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class BadRequestError extends ApiError {
    constructor(message = 'Bad request') {
        super(message, 400);
    }
}

export class NotFoundError extends ApiError {
    constructor(message = 'Not found') {
        super(message, 404);
    }
}

export class UnauthorizedError extends ApiError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}

export class EmailAlreadyExistsError extends ApiError {
    constructor(message = 'E-mail already registred') {
        super(message, 401);
    }
}

export class InvalidEmailOrPasswordError extends ApiError {
    constructor(message = 'Invalid e-mail or password') {
        super(message, 401);
    }
}

export class InvalidValidationEmail extends ApiError {
    constructor(message = 'Invalid e-mail') {
        super(message, 401);
    }
}

export class InvalidValidationPassword extends ApiError {
    constructor(
        message = 'Invalid password - Must contain 6 characters or more'
    ) {
        super(message, 401);
    }
}
