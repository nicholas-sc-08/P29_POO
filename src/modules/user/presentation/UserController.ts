import type { FastifyReply, FastifyRequest } from "fastify";
import { injectable } from "tsyringe";
import { CreateUser } from "../application/CreateUser.js";
import { CreateUserSchema } from "../Schemas/userSchemas.js";

@injectable()
export class UserController {

    constructor(private createUserUseCase: CreateUser) { };

    public async create(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {

        try {

            const userData = CreateUserSchema.parse(request.body);
            const user = await this.createUserUseCase.execute(userData)
            return reply.status(201).send({
                id: user.id,
                name: user.name,
                email: user.email,
                cpf: user.cpf
            });

        } catch (error: any) {

            if (error instanceof Error && error.message === "User already exists!") {
                return reply.status(409).send({ message: error.message });
            };

            return reply.status(500).send({ message: "Internal Server Error" });
        };
    };
};