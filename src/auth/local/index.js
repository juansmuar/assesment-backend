import { Router } from 'express';

import {
  handleLoginUser,
} from './local.controller.js'

const router = Router();


// Login
// POST /auth/local/login
router.post('/login', handleLoginUser);

export default router;