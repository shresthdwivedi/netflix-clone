'use client';

import useMovieList from "@/hooks/useMovieList";
import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";

interface MovieListProps {
    title: string,
}


const MovieList: React.FC<MovieListProps> = ({
    title,
}) => {
    
    const { data: movies = []} = useMovieList();

    if(isEmpty(movies)){
        return null;
    }

    return (
        <div className="px-4 md:px-12 mt-8 space-y-8" >
            <p className="text-white font-semibold text-base md:text-xl lg:text-2xl mb-4">
                {title}
            </p>
            <div className={`grid grid-cols-${movies.length} gap-2`}>
                {movies.map((movie: Record<string, any>) => (
                    <MovieCard key={movie.id} data={movie}/>
                ))}
            </div>
        </div>
    )
}

export default MovieList;