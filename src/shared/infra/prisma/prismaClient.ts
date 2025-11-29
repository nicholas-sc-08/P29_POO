import { injectable } from "tsyringe";
import { PrismaClient } from "@prisma/client/extension";

@injectable()
export class PrismaClientService {
    
    public client: PrismaClient;

    constructor() {
        
        try {
        
            this.client = new PrismaClient({} as any);
        
        } catch (error) {

            console.error(error);
            throw error;
        };
    };
};