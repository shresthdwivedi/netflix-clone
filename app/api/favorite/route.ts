import prisma from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const currentUser = await serverAuth();

        const { movieId } = await req.json();
        const existingMovie = await prisma.movie.findUnique({
            where: {
                id: movieId,
            }
        })

        if(!existingMovie) {
            throw new Error('Movie not found')
        }

        const user = await prisma.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favoriteIds: {
                    push: movieId,
                }
            }
        })

        return NextResponse.json(user);
    }
    catch(error){
        console.error(error);
        return NextResponse.json({status: 400})
    }
}

export async function DELETE(req: Request){
    try{
        const currentUser = await serverAuth();

        const { movieId } = await req.json();
        const existingMovie = await prisma.movie.findUnique({
            where: {
                id: movieId,
            }
        })
        if(!existingMovie) {
            throw new Error('Movie not found')
        }

        const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

        const updatedUser = await prisma.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favoriteIds: updatedFavoriteIds,
            }
        })

        return NextResponse.json(updatedUser);
    }
    catch(error){
        console.error(error);
        return NextResponse.json({status: 400})
    }
}
