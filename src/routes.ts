import { Router } from 'express'
import { getConnection } from 'typeorm'
import { Item } from './database/entity/Item'

const routes = Router()

// declaro minhas rotas
routes.get('/', async (req, res) => {
  const item = new Item()
  item.marca = 'marca'
  item.codigo = '123456'
  item.produto = 'produto'
  item.quantidade = 2
  item.tipo = 'tipo'
  item.observacao = 'observacao'

  const itemSaved = await getConnection().manager.save(item)
  res.json(itemSaved)
})

export default routes
