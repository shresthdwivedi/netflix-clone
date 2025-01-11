import prisma from "@/lib/db";
import { NextResponse } from "next/server";

async function handler(req: Request, { params }: { params: { movieId: string } }) {
    try{
        const { movieId } = await params;
        
        if(typeof movieId !== 'string') {
            throw new Error('Invalid movieId');
        }

        if(!movieId) {
            throw new Error('movieId is required');
        }

        const movie = await prisma.movie.findUnique({
            where: {
                id: movieId,
            }
        })

        if(!movie) {
            throw new Error('Movie not found');
        }

        return NextResponse.json(movie);
    }
    catch(error) {
        console.error(error);
        return NextResponse.json({status: 400})
    }
}

export { handler as GET };