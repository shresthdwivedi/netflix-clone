'use client';

import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import Image from "next/image";

const TOP_OFFSET = 66;

export default function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true)
            }else{
                setShowBackground(false)
            }
        }   
        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }
    ,[])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current) 
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current) 
    }, [])

    return ( 
        <nav className="w-full z-40 fixed">
            <div className={`${showBackground && 'bg-zinc-900 bg-opacity-90'} px-4 md:px-16 py-6 flex flex-row items-center transition duration-500`}>
                <Image className="h-10 w-20 lg:h-20 lg:w-32" src="/images/logo.jpg" alt="logo" width={1801} height={756} />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Films"/>        
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by languages"/>
                </div>
                <div onClick={toggleMobileMenu}className="lg:hidden flex flex-row items-center ml-8 text-white relative cursor-pointer gap-2">
                    <p className="text-white">
                        Browse
                    </p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row items-center ml-auto gap-7">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row relative gap-2 items-center cursor-pointer">
                        <div className="w-7 h-7 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image src="/images/profile-purple.jpg" alt="profile-photo" width={200} height={200} />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}