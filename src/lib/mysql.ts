import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // .envファイルから環境変数を読み込む

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const query = async (sql: string, values?: any[]) => {
  const conn = await pool.getConnection();
  try {
    const [results] = await conn.query(sql, values);
    return results;
  } finally {
    conn.release();
  }
};
