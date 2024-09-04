import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://itszltd:$Winter_2024@cluster0.fhetg.mongodb.net/food-del');
    console.log("DB Connected for Blog Apps");
}

