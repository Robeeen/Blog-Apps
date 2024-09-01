const { NextResponse } = require("next/server")

export async function GET(request){
    console.log("Got GET Req");
    return NextResponse.json({msg: "Test"})
}
