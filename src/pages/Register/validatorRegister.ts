import { z } from "zod"

export const schema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.string().email("Deve ser um e-mail válido"),
    password: z.string().min(4).max(20).nonempty("Senha é obrigatória e deve ter no mínimo 4 caracteres"),
    phone: z.string()
})

