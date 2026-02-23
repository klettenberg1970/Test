import express from 'express';
import cors from 'cors';

import startRouter from './routes/startRouter.js';

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/start', startRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});