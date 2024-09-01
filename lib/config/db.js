import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect( 'mongodb+srv://itszltd:<$Winter_2024>@cluster0.fhetg.mongodb.net/blog-app')
}

