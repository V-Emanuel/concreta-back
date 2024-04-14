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
                email: 'viviane@example.com',
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

    await prisma.city.createMany({
        data: [
            {
                name: "Campo Formoso - Sede"
            },
            {
                name: "Campo Formoso - Interior"
            },
            {
                name: "Laje dos Negros"
            },
            {
                name: "Antonio Gonçalves"
            },
            {
                name: "Pindobacú"
            },
            {
                name: "Senhor do bonfim"
            },
        ]
    });

    await prisma.branch.createMany({
        data: [
            {
                name: "Previdenciário"
            },
            {
                name: "Trabalhista"
            },
            {
                name: "Tributário"
            },
            {
                name: "Penal"
            },
            {
                name: "Civil"
            },
            {
                name: "Matrimonial"
            },
            {
                name: "Empresarial"
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