import express from 'express';
import { createUser, getUserById, login } from '../controllers/usercontroller.js';

const router = express.Router();

router.post('/', createUser);
router.post('/login', login); 
router.get('/:id', getUserById);

export default router;
