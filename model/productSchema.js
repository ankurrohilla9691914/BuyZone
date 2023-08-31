import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const productSchema = new Schema({
    id: {
        type:String,
        unique:true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
    category:String
});


const products = mongoose.model('product', productSchema);

export default products;