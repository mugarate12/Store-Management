import { Router } from 'express'

import { ItemController } from './controllers/itemController'

const routes = Router()

// declaro minhas rotas
routes.post('/item', new ItemController().create)

export default routes
