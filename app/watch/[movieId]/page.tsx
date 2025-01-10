import WatchComponent from "@/components/WatchComponent";
import React from "react";

export default async function Watch({ params }: { params: { movieId: string} }) {
      const { movieId } = await params;

    return(
        <>
            <WatchComponent movieId={movieId}/>   
        </>
    )
} 