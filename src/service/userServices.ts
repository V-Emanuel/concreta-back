import { UserCreate } from "types/UserCreate";
import userRepositories from "repositories/userRepositories";
import bcrypt from "bcrypt";

async function create(body: UserCreate): Promise<void> {
    // const { rowCount:  } = await userRepositories.findByEmail(body.email);
    // if (rowCount) throw errors.duplicatedEmailError(body.email);
    const hashPassword = await bcrypt.hash(body.password, 10);
    await userRepositories.create(body);
}

export default {
    create,
};