import { Request, Response, NextFunction } from "express";
import { UserCreate } from "types/UserCreate";
import userServices from "service/userServices";

async function create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const body: UserCreate = req.body

    try {
        await userServices.create(body);
        return res.sendStatus(201);
    } catch (error) {
        return next(error);
    }
}

export default {
    create,
};