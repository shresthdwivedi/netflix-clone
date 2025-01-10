'use client';

import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps { 
    movieId: string,
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/watch/${movieId}`)} 
            className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto sm:text-xs md:text-base lg:text-lg font-semibold flex flex-row items-center justify-center hover:bg-neutral-300 transition cursor-pointer ">
            <BsFillPlayFill className="h-4 w-4 md:h-8 md:w-8 mr-1" />
            Play Now
        </div>
    )
}

export default PlayButton;