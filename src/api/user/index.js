import{ Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services.js';
import { handleGetAllUsers,
  handleGetUser,
  handleCreateUser ,
  handleUpdateUser,
  handleDeleteUser
} from './user.controller.js';

const router = Router();

//get users (admin only)
router.get('/', isAuthenticated, hasRole(['ADMIN']), handleGetAllUsers);
router.get('/:id', isAuthenticated,hasRole(['ADMIN']), handleGetUser);

router.post('/', handleCreateUser);

//modify users (admin only)
router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateUser);
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteUser);

export default router;

