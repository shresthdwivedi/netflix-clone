'use client';

import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
    const { data:user } = useCurrentUser();

    if(!visible){
        return null;
    }
    return(
        <div className="bg-black w-56 absolute border-2 border-gray-800 top-14 right-0 py-5 flex flex-col">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row w-full items-center gap-3 ">
                    <img className="w-8 rounded-md" src="/images/profile-purple.jpg" alt="profile-photo"/>
                    <p className="text-white text-sm group-hover/item:underline ">
                        {user.name}
                    </p>
                </div>
                <hr className="border-gray-800 my-4"/>
                <div  
                    onClick={() => signOut()}
                    className="px-3 text-center text-sm text-white hover:underline">
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;