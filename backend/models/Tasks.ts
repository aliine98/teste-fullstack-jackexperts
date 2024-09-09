import { z } from 'zod';

export const Task = z.object({
    id: z.string().uuid(),
    title: z.string().min(1, 'Título não pode ser vazio'),
    description: z.string(),
    status: z.enum(['incomplete', 'complete']),
});
