import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(10).required(),
    password: joi.string().min(8).required(),
    user_status: joi.number().min(1).max(1).required()
});