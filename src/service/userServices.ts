import { UserCreate } from "types/UserCreate";
import userRepositories from "repositories/userRepositories";
import bcrypt from "bcrypt";

async function create(body: UserCreate): Promise<void> {
    // const { rowCount:  } = await userRepositories.findByEmail(body.email);
    // if (rowCount) throw errors.duplicatedEmailError(body.email);
    const hashPassword: string = await bcrypt.hash(body.password, 10);

    await userRepositories.create({ name: body.name, email: body.email, password: hashPassword, user_status: body.user_status });
}

export default {
    create,
};