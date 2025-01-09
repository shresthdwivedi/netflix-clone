import prisma from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await serverAuth();

        const movies = await prisma.movie.findMany();
        return NextResponse.json(movies);
    }
    catch(error){
        console.error(error);
        return NextResponse.json({status:400})
    }
}