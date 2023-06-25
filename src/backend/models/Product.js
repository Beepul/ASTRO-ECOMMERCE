import mongoose from "mongoose";

const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type:String,
        required: [true, "Product name is required"]
    },
    desc:{
        type: String
    },
    image:{
        type:[String],
        required: [true, "Image is required"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"]
    },
    featured:{
        type: Boolean,
        default: false
    },
    discount:{
        type: Number,
        default: 0
    },
    rating:{
        type: Number,
        default: 0,
        min: [0, 'Rating cannot be less than 0'],
        max: [5, "Rating cannot be greater than 5"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    category:{
        type: [String],
        required: [true,"Please select at least one category."],
        enum:{
            values: ['men','women','jacket','jogger','leggings','shirt','hoodie','t-shirt','sleeveless','pant','shorts','shoes','coat','sweater','hat','sweatshirt','top','bag'],
            message: '{VALUE} is not supported'
        }
    },
    stock:{
        type: Number,
        default:0
    }
})

export default mongoose.models.Product || mongoose.model('Product',productSchema);