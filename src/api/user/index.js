import{ Router } from 'express';
import { handleGetAllUsers,
  handleGetUser,
  handleCreateUser ,
  handleUpdateUser,
  handleDeleteUser
} from './user.controller.js';

const router = Router();

//get users (admin only)
router.get('/', handleGetAllUsers);
router.get('/:id', handleGetUser);

router.post('/', handleCreateUser);
router.patch('/:id', handleUpdateUser);
router.delete('/:id', handleDeleteUser);

export default router;

