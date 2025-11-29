import { PrismaClient } from "@prisma/client/extension";
import { injectable } from "tsyringe";

@injectable()
export class PrismaClientService {

    public client: PrismaClient;

    constructor() {

        this.client = new PrismaClient();
    };
};