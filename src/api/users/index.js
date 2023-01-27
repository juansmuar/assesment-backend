import{ Router } from 'express';
import { handleCreateUser } from './users.controller.js'

const router = Router();

//get users (admin only)
router.get('/');
router.get('/:id');

router.post('/', handleCreateUser);

export default router;

