import List from './list.model.js';

export function getAllLists(user) {
  const createdBy = user._id;
  return List.find({ createdBy : createdBy})
}

// Buscar lista por id
export function getListById(id, user) {
  const createdBy = user._id;
  return List.findOne({_id : id, createdBy : createdBy})
}

// Crear lista agregando el creador
export function createList(list, user) {
  const createdBy = user._id;
  list["createdBy"]= createdBy; 
  return List.create(list);
}

export function updateList(id, list, user) {
  const createdBy = user._id;
  console.log(list);
  return List.findOneAndUpdate({_id : id, createdBy : createdBy}, {$push: {items : list}});
}

export function deleteList(id, user) {
  const createdBy = user._id;
  return List.findOneAndDelete({_id : id, createdBy : createdBy});;
}