import { NextApiRequest } from "next"
import { getSession } from "next-auth/react"
import prisma from "./db";

const serverAuth = async(req: NextApiRequest) => {
    const session = await getSession({ req });
    if(!session?.user?.email){
        throw new Error('Not Signed In')
    }
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        }
    })
    if(!currentUser){
        throw new Error('User not found')
    }

    return  { currentUser };
}

export default serverAuth;