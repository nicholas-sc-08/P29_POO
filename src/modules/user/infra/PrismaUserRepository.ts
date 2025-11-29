import { injectable, inject } from "tsyringe";
import { PrismaClientService } from "../../../shared/infra/prisma/prismaClient.js";
import type { IUserRepository, CreateUserData } from "../domain/IUserRepository.js";
import { User } from "../domain/User.js";
import { Tokens } from "../../../shared/container/tokens.js";

@injectable()
export class PrismaUserRepository implements IUserRepository {

    private prisma: PrismaClientService["client"];

    constructor(@inject(Tokens.PrismaClient) prismaService: PrismaClientService) {

        this.prisma = prismaService.client;
    };

    async findByEmail(email: string): Promise<User | null> {

        const userRecord = await this.prisma.users.findUnique({ where: { email: email} });

        if(!userRecord){

            return null
        };

        return new User(userRecord.id, userRecord.name, userRecord.email, userRecord.cpf, userRecord.password);
    };

    async create(data: CreateUserData): Promise<User> {

        const createdUser = await this.prisma.users.create({data: {
            name: data.name,
            email: data.email,
            cpf: data.cpf,
            password: data.passwordHash
        }});

        return new User(createdUser.id, createdUser.name, createdUser.email, createdUser.cpf, createdUser.password);
    };
};