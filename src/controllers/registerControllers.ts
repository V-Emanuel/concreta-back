import { Request, Response, NextFunction } from "express";
import { RegisterCreate } from "types/RegisterCreate";
import registerServices from "service/registerServices";

async function create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const body: RegisterCreate = req.body;

    try {
        await registerServices.create(body);
        return res.sendStatus(201);

    } catch (error) {
        return next(error);
    }
}

export default {
    create,
};