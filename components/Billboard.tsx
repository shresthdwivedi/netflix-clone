'use client';

import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard: React.FC = () => {

    const { data } = useBillboard();

    return (
        <div className="relative w-full h-[56.25vw]">
            <video 
                className="w-full h-[56.25vw] object-cover brightness-[60%]"
                autoPlay
                muted
                loop
                poster={data?.thumbnailUrl}
                src={data?.videoUrl}>    
            </video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 ">
                <p className="text-white h-full w-[50%] text-1xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
                    {data?.title}
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[90%] lg:w-[50%] drop-shadow-xl">
                    {data?.description}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <button className="flex flex-row items-center bg-white text-white bg-opacity-30 text-xs lg:text-lg text-semibold rounded-md px-2 md:px-4 py-1 md:py-2 hover:bg-opacity-20 w-auto transition">
                        <AiOutlineInfoCircle className="mr-1"/>
                        More Info
                    </button>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Billboard;