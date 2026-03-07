import express from 'express';
import { checkPasswort } from '../controllers/Passwort/passwortController.js';

const router = express.Router();

router.post('/', checkPasswort);


export default router;