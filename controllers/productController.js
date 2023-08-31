import Products from "../model/productSchema.js";

export const getproducts = async (request, response) => {
  try {
    const products = await Products.find({});
    response.status(200).json({ products });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getproductById = async (request, response) => {
  try {
    const product = await Products.findOne({'id':request.params.id});
    response.status(200).json({ product });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
