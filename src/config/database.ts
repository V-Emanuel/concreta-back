import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

type OptionType = {
    connectionString: string;
    ssl: boolean;
}

const options: OptionType = {
    connectionString: process.env.DATABASE_URL || "postgresql://postgres:root@localhost:5432/escritoriovg",
    ssl: false,
}

if(process.env.MODE === "PROD") options.ssl = true;

const connectionDb = new Pool(options);

export default connectionDb;