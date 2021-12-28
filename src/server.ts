import express from 'express';
import routes from './routes';
import cors from 'cors';

const server = express()

server.use(routes)
server.use(cors())

export default server;