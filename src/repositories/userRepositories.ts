import connectionDb from "config/database";
import { QueryResult } from "pg";
import { UserCreate } from "types/UserCreate";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function create(body: UserCreate): Promise<void> {
    await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
            userStatus: body.userStatus
        }
    });
}

async function findByEmail(email: string): Promise<UserCreate | null> {
    return await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
}
async function findById(id: number): Promise<UserCreate | null> {
    return await prisma.user.findUnique({
        where:{
            id: id,
        }
    });
}

export default {
    create,
    findByEmail,
    findById
};