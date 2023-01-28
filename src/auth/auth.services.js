import jwt  from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import { getUser } from '../api/user/user.services.js';

dotenv.config();

const SECRET = process.env.SECRET_TOKEN_APP;
console.log(SECRET);

export function signToken(payload) {
  const token = jwt.sign(
    payload,
    SECRET,
    { expiresIn: '10h' },
  )

  return token;
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET);

    return decoded;
  } catch (error) {
    return false;
  }
}

export async function isAuthenticated(req, res, next) {
  const token = req.headers?.authorization?.split(' ')[1];
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'No token' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const user = await getUser({ email: decoded.email });

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  req.user = user;

  next();
  return true;
}
