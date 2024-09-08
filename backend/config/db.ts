import mysql from 'mysql2/promise';
import 'dotenv/config';

export const client = mysql.createPool(process.env.MYSQL_URI || '');
