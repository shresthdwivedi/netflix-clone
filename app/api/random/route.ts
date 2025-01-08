import prisma from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await serverAuth();

        const movieCount = await prisma.movie.count();
        const randomIndex = Math.random() * movieCount;

        const randomMovies = await prisma.movie.findMany({
            take: 1,
            skip: randomIndex,
        })

        return NextResponse.json(randomMovies[0]);
    }
    catch(error){
        console.error(error);
        return NextResponse.json({message: error, status: 400})
    }
}