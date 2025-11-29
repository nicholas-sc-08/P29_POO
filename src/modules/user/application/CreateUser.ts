import { injectable, inject } from "tsyringe";
import { User } from "../domain/User.js";
import type { IUserRepository } from "../domain/IUserRepository.js";
import type { IHashProvider } from "../../../shared/providers/IHashProvider.js";
import { Tokens } from "../../../shared/container/tokens.js";

interface ICreateUserDTO {

    name: string;
    email: string;
    cpf: string;
    password: string;
};

@injectable()
export class CreateUser {

    constructor(@inject(Tokens.UserRepository) private userRepository: IUserRepository,
    @inject(Tokens.HashProvider) private hashProvider: IHashProvider){};

    async execute({name, email, cpf, password}: ICreateUserDTO): Promise<User> {

        const userExists = await this.userRepository.findByEmail(email);

        if(userExists) {

            throw new Error("User already exists!");
        };

        const passwordHash = await this.hashProvider.hash(password);
        const user = await this.userRepository.create({ name, email, cpf, passwordHash})
        
        return user;
    };
};