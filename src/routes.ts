import { Router } from 'express'

import { ItemController } from './controllers/itemController'

const routes = Router()

// declaro minhas rotas
routes.get('/item', new ItemController().index)
routes.get('/item/:id', new ItemController().indexById)
routes.post('/item', new ItemController().create)
routes.put('/item/:id', new ItemController().update)
routes.delete('/item/:id', new ItemController().remove)

export default routes
