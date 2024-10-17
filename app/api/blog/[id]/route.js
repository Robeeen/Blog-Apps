import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

//create an api for Update-Edit record of Blog post

export async function PUT(request, {param}){
    const { id } = param;
    const { newTitle, newDescription, newCategory, newAuthor, newImage, newAuthorImg } = await request.json();
    await BlogModel.findByIdAndUpdate(id, {title, description, category, author, image, authorImg});
    return NextResponse.json({ success: true, msg: "Blog is Updated" });
}
