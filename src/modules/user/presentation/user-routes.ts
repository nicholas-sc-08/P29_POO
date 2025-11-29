import type { FastifyInstance } from "fastify";
import { container } from "tsyringe";
import { UserController } from "./UserController.js";

export async function userRoutes(app: FastifyInstance) {

    const userController = container.resolve(UserController);
    app.post("/", (request, reply) => userController.create(request, reply));
};