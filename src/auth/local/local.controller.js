import { getUser } from '../../api/user/user.services.js';
import { signToken } from '../auth.services.js';


export async function handleLoginUser(req, res, next) {
  const { email, password } = req.body;

  console.log(req.body);

  try {
    const user = await getUser({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }
    const validPassword = await user.comparePassword(password)
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    console.log("Validid password");
    console.log(user.userProfile);
    const payload = user.userProfile;
    console.log(payload);
    

    //Generate JWT
    const token = signToken(payload);
    return res.status(200).json({ profile: user.userProfile, token });

  } catch (error) {
    return res.status(500).json(error.message);
  }
}