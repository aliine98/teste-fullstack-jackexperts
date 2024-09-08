import { z } from 'zod';

const User = z.object({
    id: z.string().uuid(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6).max(16),
});

export type User = z.infer<typeof User>;
