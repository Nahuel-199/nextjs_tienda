import connectDB from "nahuel/utils/connectDB";
import Products from "../../../models/productModel";
/* import auth from "../../../middleware/auth"; */

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "GET":
        await getProducts(req, res)
        break;
    case "POST":
        await createProduct(req, res)
        break;
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Products.find()

    res.json({
      status: "success",
      result: products.length,
      products
    });
    
  } catch (err) {
     return res.status(500).json({ err: err.message });
  }
};

const createProduct = async (req, res) => {
  try{

  const {title, price, color, inStock, description, category, images} = req.body

  if(!title || !price || !color || !inStock || !description || category === "all" || images.length === 0)
  return res.status(400).json({err: "Por favor agregue todos los campos."})


  const newProduct = new Products({
  title: title.toLowerCase(), price, color, inStock, description, category, images
  })

  await newProduct.save()

  res.json({msg: "¡Éxito! Creó un producto"})
} catch(err){
  return res.status(500).json({ err: err.message });
}
}
