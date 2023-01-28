import{ Router } from 'express';
import { isAuthenticated } from '../../auth/auth.services.js';
import { handleGetAllLists,
  handleGetListById,
  handleCreateList,
  handleUpdateList,
  handleDeleteList
} from './list.controller.js'

const router = Router();

router.get('/', isAuthenticated, handleGetAllLists);
router.get('/:id', isAuthenticated, handleGetListById);
router.post('/', isAuthenticated, handleCreateList);
router.patch('/:id', isAuthenticated, handleUpdateList);
router.delete('/:id', isAuthenticated, handleDeleteList);

export default router;