import express from 'express'
import { createServer } from 'http'

export const expressApp = express()
export const httpApp = createServer(expressApp)
