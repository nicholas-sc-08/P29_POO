import { container } from "tsyringe";
import { Tokens } from "./tokens.js";
import type { IHashProvider } from "../providers/IHashProvider.js";
import { BcryptHashProvider } from "../providers/BcryptHashProvider.js";
import type { IUserRepository } from "../../modules/user/domain/IUserRepository.js";
import { PrismaClientService } from "../infra/prisma/prismaClient.js";
import { PrismaUserRepository } from "../../modules/user/infra/PrismaUserRepository.js";
import type { ILogger } from "../providers/ILogger.js";
import { PinoLogger } from "./PinoLogger.js";

container.registerSingleton<PrismaClientService>(Tokens.PrismaClient, PrismaClientService);
container.registerSingleton<IHashProvider>(Tokens.HashProvider, BcryptHashProvider);
container.registerSingleton<IUserRepository>(Tokens.UserRepository, PrismaUserRepository);
container.registerSingleton<ILogger>(Tokens.Logger, PinoLogger);