import{ Router } from 'express';
import { handleGetAllUsers,
  getUserById,
  handleCreateUser ,
  handleUpdateUser,
  handleDeleteUser
} from './user.controller.js';

const router = Router();

//get users (admin only)
router.get('/', handleGetAllUsers);
router.get('/:id', getUserById);

router.post('/', handleCreateUser);
router.patch('/:id', handleUpdateUser);
router.delete('/:id', handleDeleteUser);

export default router;

