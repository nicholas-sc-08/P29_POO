import { User } from "./User.js";

export type CreateUserData = {

    name: string;
    email: string;
    passwordHash: string;
    cpf: string;
};

export interface IUserRepository {
    
    findByEmail(email: string): Promise<User | null>;
    create(data: CreateUserData): Promise<User>;
};