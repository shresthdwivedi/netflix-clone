'use client';

import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

export default function ClientComponent() {

    const { data: user } = useCurrentUser();
    return ( 
        <>
            <h1 className="text-2xl text-green-500">
            Netflix Clone
            </h1>
            <p className="text-lg text-gray-500">
                logged in as: { user?.name }
            </p>
            <button
                onClick={() => {signOut()}}
                className="h-10 w-full bg-white"
                >
                Logout!    
            </button> 
        </>
    );
}