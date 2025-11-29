import { z } from "zod";

export const CreateUserSchema = z.object({

    name: z.string().min(1).trim(),
    email: z.string().min(1),
    cpf: z.string().min(1).max(15),
    password: z.string().min(7).max(12), 
});

export type ICreateUserDTO = z.infer<typeof CreateUserSchema>;