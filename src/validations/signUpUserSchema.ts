import { z } from 'zod';

export const signUpUserSchema = z.object({
  name: z.string().min(2, { message: "Este campo é obrigatório." }),
  email: z.string().email({ message: "E-mail inválido." }),
  phone: z.string().min(11, { message: "WhatsApp inválido." }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
});

export type SignUpData = z.infer<typeof signUpUserSchema>;
