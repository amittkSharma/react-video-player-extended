import Joi from 'joi'

export const markersValidationSchema = Joi.array().items(
  Joi.object({
    id: Joi.number().required(),
    time: Joi.number().required(),
    title: Joi.string().required(),
  }),
)
