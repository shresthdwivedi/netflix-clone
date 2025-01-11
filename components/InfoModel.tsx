'use client';

import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./playButton";
import FavoriteButton from "./FavoriteButton";

interface InfoModalProps {
    visible?: boolean,
    onClose: () => void,
}

const InfoModal: React.FC<InfoModalProps> = ({ 
    visible, 
    onClose
}) => {

    const [isVisible, setIsVisible] = useState(!!visible);
    
    const { movieId } = useInfoModal();
    const { data = {} } = useMovie(movieId);

    useEffect(() => {
        setIsVisible(!!visible);
    },[visible])

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300)
    },[onClose])

    if(!visible){
        return null;
    }

    return (
        <div className="inset-0 z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed">
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
                    <div className="relative h-96">
                        <video 
                            autoPlay
                            muted
                            loop
                            disablePictureInPicture
                            className="w-full h-full object-cover brightness-[60%]"
                            poster={data?.thumbnailUrl}
                            src={data?.videoUrl}
                        ></video>
                        <div 
                            onClick={handleClose}
                            className="absolute top-3 right-3 bg-black rounded-full h-10 w-10 flex items-center justify-center bg-opacity-70 cursor-pointer">
                            <AiOutlineClose className="text-white" size={20}/>
                        </div>
                        <div className="absolute left-10 bottom-[10%]">
                            <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                                {data?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton movieId={data?.id}/>
                                <FavoriteButton movieId={data?.id}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center px-12 pt-8 gap-8">
                        <p className="text-green-400 font-semibold text-lg">
                            New 
                        </p>
                        <p className="text-white font-semibold font-lg">
                            {data?.genre}
                        </p>
                        <div className="flex flex-row ml-auto items-center">
                            <p className="text-neutral-500 text-lg">
                                {data?.duration} mins
                            </p>
                        </div>
                    </div>
                    <div className="px-12 pt-4 pb-8">
                        <p className="text-neutral-300 font-semibold font-lg">
                            {data?.description}                         
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal;