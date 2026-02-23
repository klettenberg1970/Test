import express from 'express';
import cors from 'cors';

import logger from './middleware/logger.js'

import startRouter from './routes/startRouter.js';
import wetterRouter from './routes/wetterRouter.js';

const app = express();


app.use(cors());
app.use(logger);
app.use(express.json());


app.use('/api/start', startRouter);
app.use('/api/wetter', wetterRouter);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});