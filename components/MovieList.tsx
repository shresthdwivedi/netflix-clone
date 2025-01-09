'use client';

import useMovieList from "@/hooks/useMovieList";
import { isEmpty } from "lodash";
import React from "react";

interface MovieListProps {
    title: string,
}


const MovieList: React.FC<MovieListProps> = ({
    title,
}) => {
    
    const { data: movies = []} = useMovieList();
    console.log(movies)

    if(isEmpty(movies)){
        return null;
    }

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8" >
            <p className="text-white font-semibold text-base md:text-xl lg:text-2xl mb-4">
                {title}
            </p>
            <div className={`grid grid-cols-${movies.length} gap-2`}>
                {movies.map((movie: Record<string, any>) => (
                    <div key={movie.id}>
                        {movie.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList;