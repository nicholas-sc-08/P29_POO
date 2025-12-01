import type { Request, Response } from "express";
import { UserService } from "./user.service.js";
import type { IUser } from "../../types/IUser.js";

export class UserController {

    private userService: UserService;

    constructor(userService: UserService) {

        this.userService = userService;
    };

    public async createUser(req: Request, res: Response): Promise<Response> {

        try {

            const { name, email, password } = req.body;
            const newUser = await this.userService.createUser({ name, email, password });
            return res.status(201).json(newUser);

        } catch (error: any) {

            return res.status(400).json({ error: (error as Error).message });
        };
    };

    public async getUserByEmail(req: Request, res: Response): Promise<Response> {

        try {

            const { email } = req.body;
            const getUser = await this.userService.getUser(email);

            if (!getUser) {

                return res.status(404).json({ error: "User not found!" });
            };
            return res.status(200).json(getUser);

        } catch (error: any) {

            return res.status(400).json({ error: (error as Error).message });
        };
    };
};