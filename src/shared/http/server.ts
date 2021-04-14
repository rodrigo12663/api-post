import express, { Request, Response } from 'express'
import '../typeorm'
const app = express()
app.listen(3333, () => {
  console.log('Server started on port 3333!')
})

app.get('/', (req:Request, res:Response) => {
  res.send('hello word test')
})
