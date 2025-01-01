import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
    try{
        const { email, name, password } = await req.json();
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        if(existingUser){
            return NextResponse.json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: "",
                emailVerified: new Date(),
            }
        })
        return NextResponse.json(user)

    } catch(error){  
        console.log(error);
        return NextResponse.json(error)
    }
}

