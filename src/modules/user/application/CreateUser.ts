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


};