
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    email: string;
    name: string;
    password: string;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract users(): User[] | Promise<User[]>;
}

export class User {
    _id: string;
    createdAt: DateTime;
    email: string;
    name: string;
    updatedAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
