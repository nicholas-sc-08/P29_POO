import { container } from "tsyringe";
import { Tokens } from "./tokens.js";
import type { IHashProvider } from "../providers/IHashProvider.js";
import { BcryptHashProvider } from "../providers/BcryptHashProvider.js";
import type { IUserRepository } from "../../modules/user/domain/IUserRepository.js";
import { PrismaClientService } from "../infra/prisma/prismaClient.js";
import { PrismaUserRepository } from "../../modules/user/infra/PrismaUserRepository.js";
import pino from "pino";

container.registerSingleton<PrismaClientService>(Tokens.PrismaClient, PrismaClientService);
container.registerSingleton<IHashProvider>(Tokens.HashProvider, BcryptHashProvider);
container.registerSingleton<IUserRepository>(Tokens.UserRepository, PrismaUserRepository);

const pinoInstance = pino({

    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    transport: { target: "pino-pretty", options: {colorize: true, ignore: "pid,hostname"}}
});

container.registerInstance(Tokens.Logger, pinoInstance as any);