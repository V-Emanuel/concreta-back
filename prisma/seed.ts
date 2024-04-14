import { PrismaClient } from "@prisma/client";
import { users } from "./data/userJson";
import { branchJson } from "./data/branchJson";
import { cityJson } from "./data/cityJson";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: users
    });

    await prisma.city.createMany({
        data: cityJson
    });

    await prisma.branch.createMany({
        data: branchJson
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