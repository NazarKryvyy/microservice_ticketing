import {ValidationError} from "express-validator";

export class RequestValidationError extends Error {
    errors: ValidationError[]
    constructor(errors: ValidationError[]) {
        super();
        this.errors = errors
    }
}