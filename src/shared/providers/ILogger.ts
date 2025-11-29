export type LogContext = Record<string, any>;
export interface ILogger {

    info(message: string, context?: LogContext): void;
    warn(message: string, context?: LogContext): void;
    error(message: string, error?: Error | unknown, context?: LogContext): void;
    debug(message: string, context?: LogContext): void;

    fatal(message: string, context?: LogContext): void;
    trace(message: string, context?: LogContext): void;
    child(context?: LogContext): ILogger;
};