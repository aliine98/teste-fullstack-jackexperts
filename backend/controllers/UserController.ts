import { Request, Response } from 'express';
import { User } from '../models/User';
import { pool } from '../config/db';
import { RowDataPacket } from 'mysql2/promise';

//POST /register
export async function register(req: Request, res: Response) {
    const { error, data } = User.safeParse(req.body);
    if (error) {
        res.status(400).json(
            error.issues.map(issue => {
                return { error: issue.path.join(', '), message: issue.message };
            })
        );
        return;
    }
    const id = crypto.randomUUID();
    const { username, email, password } = data;
    try {
        const [row] = (await pool.execute('SELECT * FROM users WHERE email = ?', [email])) as RowDataPacket[];
        if (row.length > 0) {
            res.status(400).json({ error: 'email', message: 'Email já cadastrado' });
            return;
        }
        await pool.query('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)', [id, username, email, password]);
        res.status(201).json({ id, username, email });
    } catch (error) {
        res.status(500).json({ error: 'server', message: 'Erro ao cadastrar usuário' });
    }
}
