import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});

const CategoryModel = mongoose.models.category || mongoose.model('category', Schema);

export default CategoryModel