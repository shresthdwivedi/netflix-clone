import prisma from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const currentUser = await serverAuth();

        if (!currentUser || !currentUser.favoriteIds || currentUser.favoriteIds.length === 0) {
            return NextResponse.json([], { status: 200 });
        }

        const favoriteMovies = await prisma.movie.findMany({
            where: {
                id: {
                    in: currentUser.favoriteIds,
                }
            }
        })
        return NextResponse.json(favoriteMovies);
    }
    catch(error){
        console.error(error);
        return NextResponse.json({status: 400});
    }
}