import { ServerError } from '../errors'

export const badRequest = (error: Error) => ({
  statusCode: 400,
  body: error.message
})

export const forbidden = (error: Error) => ({
  statusCode: 403,
  body: error.message
})

export const serverError = (error: Error) => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any) => ({
  statusCode: 200,
  body: data
})

export const noContent = () => ({
  statusCode: 204,
  body: null
})

export const filesTooLarge = () => ({
  statusCode: 413,
  body: 'Tamanho total de arquivos é muito grande'
})