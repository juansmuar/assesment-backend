import { getUser } from '../../api/user/user.services.js';
import { signToken } from '../auth.services.js';


export async function handleLoginUser(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Username or Password must not be null",
    })
  }

  try {
    const user = await getUser({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email or password" });
    }
    const validPassword = await user.comparePassword(password)
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const payload = user.userProfile;

    //Generate JWT
    const token = signToken(payload);
    return res.status(200).json({ profile: user.userProfile, token });

  } catch (error) {
    return res.status(500).json(error.message);
  }
}