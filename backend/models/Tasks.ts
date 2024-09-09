import { z } from 'zod';

export const Task = z.object({
    id: z.string().uuid().optional(),
    title: z.string().min(1, 'Título não pode ser vazio'),
    description: z.string().optional(),
    status: z.enum(['incomplete', 'complete']),
});
