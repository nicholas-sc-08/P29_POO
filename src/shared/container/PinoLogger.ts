import { injectable } from "tsyringe";
import pino, { type Logger as PinoInstance } from "pino";
import type { ILogger, LogContext } from "../providers/ILogger.js";

@injectable()
export class PinoLogger implements ILogger {
    private logger: PinoInstance

    constructor(){

        this.logger = pino({
            level: process.env.NODE_ENV === "production" ? "info": "debug",
            transport: {
                target: "pino-pretty",
                options: { colorize: true, ignore: 'pid,hostname'}
            }
        });
    };

    public info(message: string, context?: LogContext): void {
        this.logger.info(context ?? {}, message);
    };

    public error(message: string, error?: Error | unknown, context?: LogContext): void {

        const logObject = {
            err: error instanceof Error ? error : undefined,
            ...context
        };
        this.logger.error(logObject, message);
    };

    public warn(message: string, context?: LogContext): void {
        this.logger.warn(context ?? {}, message);
    }

    public debug(message: string, context?: LogContext): void {
        this.logger.debug(context ?? {}, message);
    };
};