import {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
} from './list.services.js'

export async function handleGetAllLists(req, res){
  const user = req.user;
  try {
    const lists = await getAllLists(user);
    return res.status(200).json(lists);

  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export async function handleGetListById(req,res,next) {
  const { id } = req.params;
  const user = req.user;
  try {
    const getList = await getListById(id, user);

    if (!getList) {
      return res.status(404).json({ message: 'List not found' });
    }
    return res.status(200).json(getList);

  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleCreateList(req,res,next){
  const data = req.body;
  const user = req.user;
  try {
    const list = await createList(data, user);
    return res.status(201).json(list);

  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export async function handleUpdateList(req,res,next) {
  const data =req.body;
  const { id }=req.params;
  const user = req.user;
  try {
    const update = await updateList(id, data, user);
    return res.status(201).json(update);

  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteList(req,res,next) {
  const { id } = req.params;
  const user = req.user;
  try {
    const list = await getListById(id, user);

    if(!list){
      return res.status(404).json({message:"List not found"});
    }

    await list.remove();
    return res.status(200).json({message: "List deleted"});

  } catch (error) {
    return res.status(500).json(error)
  }
}

