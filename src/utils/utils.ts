import { Response } from 'express'

export function throwError (condition: boolean, res: Response, message: string): Response<JSON> | undefined {
  if (condition) {
    return res.status(406).json({
      error: message
    })
  }
}

export function handleError (error: Error, res: Response): Response<JSON> | undefined {
  return res.status(502).json({
    error: `${error.name}`,
    message: `${error.message}`
  })
}
