import { authOptions } from '@/lib/authOptions';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import InfoModalWrapper from "@/components/InfoModalWrapper";



export default async function Page() {
    
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/auth');
    }

    return (
        <>
            <InfoModalWrapper/>
            <Navbar />
            <Billboard />
            <div className="pb-40">
                <MovieList title="Trending Now" />
                <MovieList title="My List" />
            </div>
        </>
    )
}


