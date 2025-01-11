import prisma from "./db";
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from "next-auth";

export async function serverAuth() {
    const session = await getServerSession(authOptions);
    if(!session?.user?.email){
        throw new Error('User not authenticated')
    }
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        }
    })
    if(!currentUser){
        throw new Error('User not found')
    }
    return currentUser;
}

export default serverAuth;