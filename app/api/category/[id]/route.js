import { ConnectDB } from "@/lib/config/db";
import CategoryModel from "@/lib/models/CategoryModel"

const { NextResponse } = require("next/server");

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

//Edit Category
export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name, newDescription: description, newSlug: slug } = await request.json();
    await CategoryModel.findByIdAndUpdate(id, {name, description, slug});
    return NextResponse.json({ success: true, msg: "Category Updated" });
}

//Get single Category
export async function GET(request, { params }) {
    const { id } = params;
    const category = await CategoryModel.findOne({_id: id});
    return NextResponse.json({ category}, {status: 200});
}