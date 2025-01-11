'use client';

import React, { useCallback } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModal";
import { BiChevronDown } from "react-icons/bi";

interface MovieCardProps {
    data: Record<string, any>,
}

const MovieCard: React.FC<MovieCardProps> = ({
    data,
}) => {

    const router = useRouter();
    const { openModal } = useInfoModal();

    return(
        <div className="group bg-zinc-900 relative col-span-1 h-[12vw] w-">
            <img 
                className="object-cover rounded-md shadow-xl transition cursor-pointer group-hover:opacity-90 sm:group-hover:opacity-0 h-[12vw] w-full"
                src={data.thumbnailUrl} alt="thumbnail" 
            />
            <div className="absolute opacity-0 top-0 transition duration-200 z-10 delay-50 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 h-[12vw]">
                <img
                    className="object-cover cursor-pointer shadow-xl rounded-t-md transition w-full h-[12vw]" 
                    src={data.thumbnailUrl} alt="thumbnail" 
                />
                <div className="bg-zinc-800 p-2 lg:p-4 absolute w-full shadow-md rounded-b-md transition">
                    <div className="flex flex-row gap-3 items-center">
                        <div 
                            onClick={() => router.push(`/watch/${data?.id}`)}
                            className="flex cursor-pointer justify-center rounded-full bg-white w-6 h-6 lg:w-10 lg:h-10 hover:bg-neutral-300 transition items-center">
                            <BsFillPlayFill className="h-4 w-4 lg:h-8 lg:w-8 ml-1 mt-0.5" />
                        </div>
                        <FavoriteButton movieId={data?.id} />
                        <div
                            onClick={() => openModal(data?.id)} 
                            className="ml-auto flex flex-row  group/item rounded-full border-white border-2 2-6 h-6 lg:w-10 lg:h-10 justify-center items-center cursor-pointer hover transition hover:border-neutral-300">
                            <BiChevronDown className="text-white h-4 w-4 lg:h-8 lg:w-8 group-hover/item:text-neutral-300" />
                        </div>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        New <span className="text-neutral-300"> 2025 </span>
                    </p>
                    <div className="flex flex-row mt-4 justify-between">
                        <div className="flex flex-row items-center">
                            <p className="text-white text-[10px] lg:text-sm">
                                {data.genre}
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-neutral-400 text-[10px] lg:text-sm">
                                {data.duration} mins
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;