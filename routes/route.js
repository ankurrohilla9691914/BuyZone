import express from "express";
import { userSignUp,userLogin } from "../controllers/userController.js";
import { getproducts,getproductById } from "../controllers/productController.js";

const router = express.Router();


router.post('/signup',userSignUp);
router.post('/login',userLogin);

router.get('/products',getproducts);
router.get('/product/:id',getproductById);



export default router;