import prisma from "./db";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function serverAuth() {
    const session = await getServerSession(authOptions);
    if(!session?.user?.email){
        return NextResponse.json({message:'Not Signed In'})
    }
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        }
    })
    if(!currentUser){
        return NextResponse.json({message:'User not found'})
    }
    return currentUser;
}

export default serverAuth;