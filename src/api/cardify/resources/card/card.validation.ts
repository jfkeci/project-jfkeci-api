
import Joi from 'joi'

const create = Joi.object({
    front: Joi.string().min(2).max(255).required(),
    back: Joi.string().min(2).max(2555).required(),
    tags: Joi.array().items(Joi.string()),
    createdBy: Joi.string().required(),
});


export default { create };