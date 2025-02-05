import { UserController } from '../controllers/userController.js';
import { Router } from 'express';


const router = Router();

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/:userEmail', UserController.getUser);
router.put('/:userEmail', UserController.updateUser);
router.delete('/:userEmail', UserController.deleteUser);


router.get('/', UserController.getAllUsers);

export default router;