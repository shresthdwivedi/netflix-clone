'use client';

import useMovieList from "@/hooks/useMovieList";
import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";
import useFavorites from "@/hooks/useFavorites";

interface MovieListProps {
    title: string,
}

interface MovieProps {
    id: string,
    title: string,
    description: string,
    videoUrl: string,
    thumbnailUrl: string,
    genre: string,
    duration: string,
}


const MovieList: React.FC<MovieListProps> = ({
    title,
}) => {
    
    const { data: movies = []} = useMovieList();
    const { data: favorites = []} = useFavorites();

    if(isEmpty(movies)){
        return null;
    }

    return (
        <div className="px-4 md:px-12 mt-8 space-y-8" >
            <p className="text-white font-semibold text-base md:text-xl lg:text-2xl mb-4">
                {title}
            </p>
            <div className={`grid grid-cols-4 gap-2`}>
                {title === 'Trending Now' ? 
                    movies.map((movie: MovieProps) => (
                        <MovieCard key={movie.id} data={movie}/>
                    ))
                    : 
                    favorites.map((favorite: MovieProps) => (
                        <MovieCard key={favorite.id} data={favorite}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;