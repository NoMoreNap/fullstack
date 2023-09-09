import express from "express"
import { userRouter } from "./users/users";
import bodyParser from 'body-parser'
import cors from 'cors'

require('dotenv').config()

const api = express();
api.use(cors())
api.use(bodyParser.urlencoded({ extended: true }))

const {
    API_URL = 'http://127.0.0.1',
    PORT = 3003
} = process.env

// users router
api.use('/user', userRouter)

api.listen(PORT, () => {
    console.log(`Сервер работает по адресу ${API_URL}:${PORT}`);
});
