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
    const { newTitle: title, newDescription: description, newCategory:category, newAuthor:author, newImage:image, newAuthorImg:authorImg } = await request.json();
    await BlogModel.findByIdAndUpdate(id, {title, description, category, author, image, authorImg});
    return NextResponse.json({ success: true, msg: "Blog is Updated" });
}

export async function GET(request, {param}){
    const { id } = param;
    const blog = await BlogModel.findOne({_id: id});
    return NextResponse.json({ blog}, {status: 200});
}
