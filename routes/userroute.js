import express from 'express';


import { createUser, getAllUsers,getUserById ,login ,deleteUser} from '../controllers/usercontroller.js' ;

const router = express.Router();
router.get('/', getAllUsers);
router.post('/createUser', createUser);
router.post('/login', login);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);


export default router;