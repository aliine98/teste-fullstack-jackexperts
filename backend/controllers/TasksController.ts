import 'dotenv/config';
import { Request, Response } from 'express';
import { Task } from '../models/Tasks';
import { pool } from '../config/db';
import { RowDataPacket } from 'mysql2/promise';
import jwt from 'jsonwebtoken';

export function authenticateToken(req: Request, res: Response, next: Function) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (token == null) return res.status(401).json({ error: 'token', message: 'Token não fornecido' });
    jwt.verify(token, process.env.JWT_SECRET || '', (err, user) => {
        if (err) return res.status(403).json({ error: 'token', message: 'Token inválido' });
        req.body.user = user;
        next();
    });
}

//GET /tasks
export async function getTasks(req: Request, res: Response) {
    const { id } = req.body.user;
    try {
        const [rows] = (await pool.execute('SELECT * FROM tasks WHERE user_id = ?', [id])) as RowDataPacket[];
        if (rows.length === 0) {
            res.status(404).json({ error: 'tasks', message: 'Nenhuma tarefa encontrada' });
            return;
        }
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'server', message: 'Erro ao buscar tarefas' });
    }
}
