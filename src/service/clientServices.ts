import { ClientCreate } from "types/ClientCreate";
import clientRepositories from "repositories/clientRepositories";

async function create(body: ClientCreate): Promise<void> {
    await clientRepositories.create(body);
}

export default {
    create,
};