import { writeFile } from "fs/promises";
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel"

const { NextResponse } = require("next/server")

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

//api endpoint to fetch all blog post from front-end
export async function GET(request){
    console.log("Got GET Req");
    return NextResponse.json({msg: "Test"})
}

//api endpoint for creating new blog from - admin panel
export async function POST(request){

    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;

    await writeFile(path, buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;

    //get data from the form

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved.");



    return NextResponse.json({success: true, msg: "Blog Added."});

}