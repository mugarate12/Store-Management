import { Request, Response } from 'express'
import { getConnection, getRepository } from 'typeorm'
import { Item } from './../database/entity/Item'
import { handleError } from './../utils/utils'

export class ItemController {
  public async create (req: Request, res: Response): Promise<Response> {
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

    return res.status(200).json(itemSaved)
  }

  public async index (req: Request, res: Response): Promise<Response> {
    const itemRespository = getRepository(Item)
    const itens = await itemRespository.find()

    return res.status(200).json(itens)
  }

  public async indexById (req: Request, res: Response): Promise<Response | undefined> {
    const id = req.params.id

    const itemRespository = getRepository(Item)
    const item = await itemRespository.findOne(id)

    if (!item) {
      return res.status(406).json({
        error: `item com id ${id} não encontrado`
      })
    } else {
      return res.status(200).json(item)
    }
  }

  public async update (req: Request, res: Response): Promise<Response | undefined> {
    const id = req.params.id
    const { quantidade } = req.body

    const itemRespository = getRepository(Item)
    const itemToUpdate = await itemRespository.findOne(id)

    // se não encontrei o item enviado no params, retorno o erro
    if (!itemToUpdate) {
      return res.status(406).json({
        error: `item com o id ${id} não encontrado`
      })
    } else {
      itemToUpdate.quantidade = quantidade

      return await itemRespository.save(itemToUpdate)
        .then((item: Item) => res.status(200).json(item))
        .catch((error: Error) => handleError(error, res))
    }
  }

  public async remove (req: Request, res: Response): Promise<Response | undefined> {
    const id = req.params.id

    const itemRespository = getRepository(Item)
    const itemToRemove = await itemRespository.findOne(id)

    if (!itemToRemove) {
      return res.status(406).json({
        error: `item com o id ${id} não encontrado`
      })
    } else {
      await itemRespository.remove(itemToRemove)
      return res.status(200).json({})
    }
  }
}
