import { Router } from 'express'

import { ItemController } from './controllers/itemController'
import { celebrate, Joi, Segments } from 'celebrate'

const routes = Router()

// declaro minhas rotas
routes.get('/item', new ItemController().index)
routes.get('/item/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), new ItemController().indexById)

routes.post('/item', celebrate({
  [Segments.BODY]: Joi.object().keys({
    marca: Joi.string().required(),
    codigo: Joi.string().required(),
    produto: Joi.string().required(),
    quantidade: Joi.number().required(),
    tipo: Joi.string().required(),
    observacao: Joi.string().required()
  })
}), new ItemController().create)

routes.put('/item/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    quantidade: Joi.number().required()
  })
}), new ItemController().update)

routes.delete('/item/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), new ItemController().remove)

export default routes
