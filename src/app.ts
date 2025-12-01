import express from "express";
import type { Express } from "express";
import cors from "cors";
import { UserService } from "./modules/user/user.service.js";
import { UserController } from "./modules/user/user.controller.js";
import { UserRepository } from "./modules/user/user.repository.js";

const app: Express = express();

app.use(express.json());
app.use(cors());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

app.get("/users/:email", (req, res) => userController.createUser(req, res));
app.post("/users", (req, res) => userController.createUser(req, res));

export default app;