import { expressApp as app, httpApp } from './globals/web'
import express from 'express'
import { router } from './routes'
import { PORT } from './config/constants'
import cors from 'cors'
import morgan from 'morgan'

app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

/** App Routes */
app.use('/', router)

/** Start listening */
httpApp.listen(PORT, () => console.log('Listening on *:' + PORT))

/** Start WebSockets */
import './ws'
