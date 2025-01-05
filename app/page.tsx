'use client';

import { signOut } from "next-auth/react";

export default function Page() {
    return ( 
        <>
            <h1 className="text-2xl text-green-500">
            Netflix Clone
            </h1>
            <button onClick={() => {signOut()}}>Logout!</button> 
        </>
    );
}