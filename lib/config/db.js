import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect( 'mongodb+srv://itszltd:<$Winter_2024>@cluster0.fhetg.mongodb.net/blog-app');
    console.log("DB Connected")
}

