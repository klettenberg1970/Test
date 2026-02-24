import express from 'express';
import { getUmfragen } from '../controllers/Umfragen/umfragenController.js';

const router = express.Router();

router.get('/', getUmfragen);


export default router;