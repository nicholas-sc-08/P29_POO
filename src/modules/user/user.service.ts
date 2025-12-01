import { UserRepository } from "./user.repository.js";
import type { IUser } from "../../types/IUser.js";

export class UserService {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {

        this.userRepository = userRepository;
    };

    public async createUser(data: { name: string, email: string, password: string }): Promise<IUser> {

        const existingUser = await this.userRepository.findByEmail(data.email);

        if(existingUser){

            throw new Error("User with this email already exists!");  
        };

        return this.userRepository.create(data);
    };

    public async getUser(email: string): Promise<IUser | null>{
        return this.userRepository.findByEmail(email);
    };
};