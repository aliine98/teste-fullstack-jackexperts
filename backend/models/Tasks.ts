import { z } from 'zod';

const Task = z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    status: z.enum(['incomplete', 'complete']),
});

export type Task = z.infer<typeof Task>;
