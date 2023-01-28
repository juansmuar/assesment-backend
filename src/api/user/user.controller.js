export async function handleCreateUser(req,res,next){
  const data=req.body;
  try {
    //const user= await createUser(data);
    //return res.status(201).json(user);
    res.send(data);

  } catch (error) {
    console.error(error)
    return res.status(500).json(error.message)
  }
}