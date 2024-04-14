import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            {
                name: 'Victor',
                email: 'victor@example.com',
                password: 'victor123',
                userStatus: 1
            },
            {
                name: 'Vinicius',
                email: 'vinicius@example.com',
                password: 'vinicius123',
                userStatus: 1
            },
            {
                name: 'Viviane',
                email: 'vinicius@example.com',
                password: 'viviane123',
                userStatus: 0
            },
            {
                name: 'Mariza',
                email: 'mariza@example.com',
                password: 'mariza123',
                userStatus: 0
            },
            {
                name: 'Manoel',
                email: 'manoel@example.com',
                password: 'manoel123',
                userStatus: 0
            },

        ]
    });

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });