import { ClientCreate} from "types/ClientCreate";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(body: ClientCreate): Promise<void> {

    await prisma.client.create({
        data: {
            name: body.name,
            status: body.status,
            phone: body.phone,
            nationality: body.nationality,
            maritalStatus: body.maritalStatus,
            mother: body.mother,
            father: body.father,
            rg: body.rg,
            cpf: body.cpf,
            cityBirth: body.cityBirth,
            stateBirth: body.stateBirth,
            urlImg: body.urlImg,
            process: body.process,
            address: body.address,
            documents: body.documents,
            comments: body.comments,
            userId: body.userId
        }
    });
}

async function findById(id: number): Promise<any> {
    return await prisma.client.findUnique({
        where:{
            id: id,
        }
    });
}

export default {
    create,
    findById
}