import{ Router } from 'express';
import { handleGetAllFavs } from './favs.controller.js'

const router = Router();

router.get('/', handleGetAllFavs);

export default router;