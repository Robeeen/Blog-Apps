import { writeFile } from "fs/promises";
import { ConnectDB } from "@/lib/config/db";

const { NextResponse } = require("next/server")

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request){
    console.log("Got GET Req");
    return NextResponse.json({msg: "Test"})
}

export async function POST(request){
    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;

    await writeFile(path, buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;

    //test
    console.log(imgUrl);
    return NextResponse.json({imgUrl});

}