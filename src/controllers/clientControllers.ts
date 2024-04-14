import { Request, Response, NextFunction } from "express";
import { ClientCreate } from "types/ClientCreate";
import clientServices from "service/clientServices";

async function create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const body: ClientCreate = req.body;

    try {
        await clientServices.create(body);
        return res.sendStatus(201);

    } catch (error) {
        return next(error);
    }
}

export default {
    create,
};