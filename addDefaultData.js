import products from "./model/productSchema.js";
import { defaultProducts } from "./constants/data.js";

const AddDefaultData = async () => {
  try {
    await products.insertMany(defaultProducts);
  } catch (error) {
    console.log("error in default ->", error.message);
  }
};
export default AddDefaultData;
