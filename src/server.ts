import "express-async-errors";
import express, {json} from "express";
import cors from "cors";
import router from "routes";

const app = express();
app.use(json());
app.use(cors());
app.use(router);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running in port ${port}`));