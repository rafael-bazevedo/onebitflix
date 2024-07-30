import express from 'express'
import { database } from './database'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log('DB connection sucessfull.')
  })
  console.log(`Server started successfuly at port ${PORT}`)
})