import { RegisterCreate } from "types/RegisterCreate";
import registerRepositories from "repositories/registerRepositories";

async function create(body: RegisterCreate): Promise<void> {

    await registerRepositories.create({
        name: body.name,
        phone: body.phone,
        text: body.text,
        userId: body.userId,
        cityId: body.cityId,
        branchId: body.branchId
    });

}

export default {
    create,
};