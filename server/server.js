import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import logger from './middleware/logger.js'

import startRouter from './routes/startRouter.js';
import wetterRouter from './routes/wetterRouter.js';
import umfragenRouter from './routes/umfragenRouter.js';
import portfolioRouter from './routes/portfolioRouter.js';
import passwortRouter from './routes/passwortRouter.js';
const app = express();


// .env Datei laden
dotenv.config();

app.use(cors());
app.use(logger);
app.use(express.json());


app.use('/api/start', startRouter);
app.use('/api/wetter', wetterRouter);
app.use('/api/umfragen', umfragenRouter);
app.use('/api/portfolio', portfolioRouter);
app.use('/api/passwort', passwortRouter);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});