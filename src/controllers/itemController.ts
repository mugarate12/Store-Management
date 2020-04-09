import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { Item } from './../database/entity/Item'
import { handleError } from './../utils/utils'

export class ItemController {
  public async create (req: Request, res: Response): Promise<void> {
    const { marca, codigo, produto, quantidade, tipo, observacao } = req.body

    const item = new Item()
    item.marca = marca
    item.codigo = codigo
    item.produto = produto
    item.quantidade = quantidade
    item.tipo = tipo
    item.observacao = observacao

    const itemSaved = await getConnection().manager.save(item)
      .catch(error => handleError(error, res))
    res.json(itemSaved)
  }
}
