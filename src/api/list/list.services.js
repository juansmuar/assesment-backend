import List from './list.model.js';

export function getAllLists() {
  return List.find({})
}

export function getListById(id) {
  return List.findById(id).populate({path:'createdBy'})
}

export function createList(list) {
  return List.create(list);
}

export function updateList(id, list) {
  const updateList = list.findByIdAndUpdate(id, list, {new:true});
  return updateList;
}

export function deleteList(id) {
  const deleteList = List.findByIdAndDelete(id);
  return deleteList;
}