import { injectable } from "tsyringe";
import { hash, compare } from "bcrypt";
import type { IHashProvider } from "../providers/IHashProvider.js";

@injectable()

export class BcryptHashProvider implements IHashProvider {

    private SALT_ROUNDS = 10;

    async hash(payload: string): Promise<string> {
        return hash(payload, this.SALT_ROUNDS);
    };

    async compare(payload: string, hashed: string): Promise<boolean> {
        return compare(payload, hashed);
    };
};