export interface IUser {

    id: number;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
};

export interface ICreateUser {

    name: string;
    email: string;
    password: string;
};