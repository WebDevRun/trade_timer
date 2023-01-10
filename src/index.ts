import dotenv from 'dotenv'
import { createReadStream } from 'fs'
import { resolve } from 'path'
import express, { Request, Response, NextFunction } from 'express'

import { Timer } from './service/timer.js'
import { getParticipants } from './service/participatns.js'
import { Id } from './service/id.js'

const app = express()
dotenv.config()

const publicDir = resolve('src', 'public')
const port = process.env.PORT
const minutes = 2
const seconds = 0
const timer = new Timer(minutes, seconds)

const setHeaders = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
}

app.use(setHeaders)
app.use(express.static(publicDir))

app.get('/api/start_timer', (req, res) => {
  timer.start()
  res.redirect('/')
})

app.get('/api/timer', (req, res) => {
  const idConstructor = new Id()

  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  })

  const interval = setInterval(() => {
    const time = timer.get()
    const id = idConstructor.get()

    if (time === '00:00') {
      clearInterval(interval)
      res.write('event: endOfStream\n')
      res.write(`data: ${time}\n`)
      res.write(`id: ${id}\n`)
      res.write('\n')
      res.end('timeout')
      return
    }

    res.write(`data: ${time}\n`)
    res.write(`id: ${id}\n`)
    res.write('\n')
  }, 1000)
})

app.get('/api/participants', (req, res) => {
  const participants = getParticipants()
  res.send(JSON.stringify(participants))
})

app.get('/', (req, res) => {
  const fileStream = createReadStream(resolve(publicDir, 'index.html'))
  fileStream.pipe(res)
})

app.listen(port, () => console.log(`server open on port: ${port}`))
