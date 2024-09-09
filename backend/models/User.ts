import { z } from 'zod';

export const User = z.object({
    id: z.string().uuid().optional(),
    username: z.string().min(1, 'Nome não pode ser vazio'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').max(16),
});
