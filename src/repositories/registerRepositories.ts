import { RegisterCreate } from "types/RegisterCreate";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(body: RegisterCreate): Promise<void> {
    await prisma.register.create({
        data: {
            name: body.name,
            phone: body.phone,
            text: body.text,
            userId: body.userId,
            cityId: body.cityId,
            branchId: body.branchId
        }
    });
}

async function findById(id: number): Promise<RegisterCreate | null> {
    return await prisma.register.findUnique({
        where:{
            id: id,
        }
    });
}

export default {
    create,
    findById
}