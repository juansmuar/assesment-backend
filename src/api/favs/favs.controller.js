export function handleGetAllFavs(req, res){
  try {
    //const products = await getAllProducts();
    //return res.status(200).json(products);
    res.send("Hiciste un get a api/favs")

  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
