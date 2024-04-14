import { RegisterCreate } from "types/RegisterCreate";
import registerRepositories from "repositories/registerRepositories";

async function create(body: RegisterCreate): Promise<void> {

    await registerRepositories.create(body);

}

export default {
    create,
};