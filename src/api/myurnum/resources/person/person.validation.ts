import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    surname: Joi.string().min(2).max(255),
    birthdate: Joi.date(),
    tags: Joi.array(),
    info: Joi.array()
});

export default {
    create
};