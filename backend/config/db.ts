import mysql from 'mysql2/promise';
import 'dotenv/config';

export const pool = mysql.createPool(process.env.MYSQL_URI || '');
