import { writeFile } from "fs/promises";
import { ConnectDB } from "@/lib/config/db";
import CategoryModel from "@/lib/models/CategoryModel"

const { NextResponse } = require("next/server");

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

//create an api endpoint to fetch all Category post from admin panel.
export async function GET(request){
    
    const category = await CategoryModel.find({});
    return NextResponse.json({category})
}

export async function POST(request){

    const formData = await request.formData();

    const CategoryData = {
        name : `${formData.get('name')}`,
        description: `${formData.get('description')}`,
        slug: `${formData.get('slug')}`
    }


await CategoryModel.create(CategoryData);
console.log('Category Saved');

return NextResponse.json({success: true, msg: "Category Saved"})

}