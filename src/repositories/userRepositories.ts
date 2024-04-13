import connectionDb from "config/database";
import { QueryResult } from "pg";
import { UserCreate } from "types/UserCreate";

async function create(body: UserCreate): Promise<void> {
    await connectionDb.query(
        `
            INSERT INTO users (name, email, password, user_status)
            VALUES ($1, $2, $3, $4)
        `,
        [body.name, body.email, body.password, body.user_status]
    );
}

async function findByEmail(email: string): Promise<QueryResult<UserCreate>> {
    return await connectionDb.query(
        `
            SELECT * FROM users WHERE email=$1
        `,
        [email]
    );
    
}

async function findById(id: number): Promise<QueryResult<UserCreate>> {
    return await connectionDb.query(
        `
            SELECT * FROM users WHERE id=$1
        `,
        [id]
    );
    
}


export default {
    create,
    findByEmail,
    findById
};