import 'reflect-metadata'; 

import fastify from 'fastify';
import { container } from 'tsyringe';
import "./shared/container/index.js";
import { configDotenv } from 'dotenv';
import { userRoutes } from './modules/user/presentation/user-routes.js';
import { Tokens } from './shared/container/tokens.js';
import type { ILogger } from './shared/providers/ILogger.js';

configDotenv();

async function bootstrap(){
    
    try {

        const app = fastify();
        
        app.register(userRoutes, { prefix: "/users"});
        const loggerInstance = container.resolve(Tokens.Logger);
        const port = Number(process.env.PORT) || 3000;
        const host = "0.0.0.0";
        
        const adress = await app.listen({port: +port, host})
        
        const logger = container.resolve(Tokens.Logger) as ILogger;
        (loggerInstance as any).info(`Server running on adress ${adress} `);

    } catch (error: any) {
        
        console.error("Server failed to start: ", error);
        process.exit(1);
    };
};

bootstrap()