import express from 'express';
import { getStart } from '../controllers/Start/startController.js';

const router = express.Router();

router.get('/', getStart);


export default router;