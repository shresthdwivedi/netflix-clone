'use client';

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteButtonProps {
    movieId: string,
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    movieId,
}) => {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(movieId)
    },[movieId, currentUser]);

    const toggleFavorites = useCallback(async () => {
        let response: Record<string, any>;

        if(isFavorite) {
            response = await axios.delete('/api/favorite', { data: { movieId } } )
        } else {
            response = await axios.post('/api/favorite', { movieId })
        }

        const updatedFavoriteIds = response?.data?.favoriteIds;
        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds,
        })
        mutateFavorites();
    },[movieId, isFavorite, currentUser, mutate, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <div 
            onClick={toggleFavorites}
            className="cursor-pointer group/item h-6 w-6 lg:h-10 lg:w-10 border-white border-2 rounded-full flex items-center justify-center transition hover:border-neutral-300">
            <Icon className="text-white h-3 w-3 lg:h-5 lg:w-5"/>
        </div>
    )
}

export default FavoriteButton;