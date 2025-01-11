import WatchComponent from "@/components/WatchComponent";
import React from "react";

export default async function Watch({ params }: { params: Promise<{ movieId: string}> }) {
      const movieId = (await params).movieId ;

    return(
        <>
            <WatchComponent movieId={movieId}/>   
        </>
    )
} 