'use client';

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface WatchComponentProps {
    movieId: string,
}

const WatchComponent: React.FC<WatchComponentProps> = ({
    movieId
}) => {

    const router = useRouter();
    const { data } = useMovie(movieId);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="flex flex-row fixed w-full p-4 z-10 items-center gap-8 bg-black bg-opacity-70">
                <AiOutlineArrowLeft 
                    onClick={() => router.push('/')}
                    className="text-white cursor-pointer" size={40}/>
                <p className="text-white text-xl md:text-3xl font-bold">
                    <span className="mr-1 font-light">
                        Watching Now:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video 
                autoPlay
                controls
                className="h-full w-full"
                src={data?.videoUrl}></video>
        </div>
    )
}

export default WatchComponent;