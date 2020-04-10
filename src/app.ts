import express from 'express'
import cors from 'cors'
import 'reflect-metadata'
import { errors } from 'celebrate'
import routes from './routes'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()
    this.middlewares()
  }

  private middlewares (): void {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(routes)
    this.express.use(errors())
  }
}

export default new App().express
