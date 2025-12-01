import prisma from "../../prisma/client.js";
import type { IUser, ICreateUser } from "../../types/IUser.js";

export class UserRepository implements IUser {

    public id!: number;
    public name: string | undefined;
    public email: string | undefined;
    public password: string | undefined;

    async findByEmail(email: string): Promise<IUser | null> {

        return prisma.users.findUnique({ where: email });
    };

    async create(data: { name: string, email: string, password: string }): Promise<IUser> {

        return prisma.users.create({ data: data });
    };
};