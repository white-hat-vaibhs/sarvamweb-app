import mongoose from 'mongoose';
import shortid from 'shortid';

const { String } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    //name: String (this is short hand declaration)

    price: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        unique: true,
        default: shortid.generate()
    },

    description: {
        type: String,
        required: true
    },

    mediaUrl: {
        type: String,
        required: true
    },

})
export default mongoose.models.Product ||
    mongoose.model('Product', ProductSchema);

    //serverless check