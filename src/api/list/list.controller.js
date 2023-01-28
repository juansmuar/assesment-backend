import {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
} from './list.services.js'

export async function handleGetAllLists(req, res){
  try {
    const lists = await getAllLists();
    return res.status(200).json(lists);

  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export async function handleGetListById(req,res,next) {
  const { id } = req.params;
  try {
    const getList = await getListById(id);

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
  try {
    const list = await createList(data);
    return res.status(201).json(list);

  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export async function handleUpdateList(req,res,next) {
  const data =req.body;
  const { id }=req.params;
  try {
    const update = await updateList(id,data);
    return res.status(201).json(update);

  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteList(req,res,next) {
  const { id } = req.params;
  try {
    const list = await getListById(id);

    if(!list){
      return res.status(404).json({message:"List not found"});
    }

    await list.remove();
    return res.status(200).json({message: "List deleted"});

  } catch (error) {
    return res.status(500).json(error)
  }
}

