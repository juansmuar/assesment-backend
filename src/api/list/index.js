import{ Router } from 'express';
import { handleGetAllLists } from './list.controller.js'

const router = Router();

router.get('/', handleGetAllLists);

export default router;