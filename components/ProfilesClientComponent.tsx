'use client';

import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";

export default function Profile() {

    const router = useRouter();
    const { data: user } = useCurrentUser();

    return(
        <>
            <div className="flex items-center justify-center h-full">
                <div className="flex flex-col">
                    <h1 className="text-3xl text-white font-bold md:text-6xl">
                        Who's watching?
                    </h1>
                    <div className="flex items-center justify-center mt-10 ">
                        <div onClick={() => router.push('/')}>
                            <div className="group flex-row w-44 mx-auto">
                                <div 
                                    className="w-44 h-44 rounded-md flex justify-center items-center border-2 border-transparent group-hover:border-white group-hover:cursor-pointer">
                                        <img src="/images/profile-purple.jpg" alt="profile-photo" />
                                </div>
                                <div className="text-2xl text-slate-300 text-center mt-4 group-hover:text-white">
                                    { user?.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

            </div> 
        </>
    )
}