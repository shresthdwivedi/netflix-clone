'use client'

import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant(variant === 'login' ? 'register' : 'login');
    }
    ,[variant])

    return (
        <>
            <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-cover bg-fixed">
                <div className="bg-black h-full w-full lg:bg-opacity-50">
                    <nav className="px-12 py-5">
                        <img src='/images/logo.jpg' alt="netflix-logo" className="h-16"/>
                    </nav>
                    <div className="flex justify-center ">
                        <div className="bg-black bg-opacity-70 p-16 self-center mt-10 lg:w-2/4 lg:max-w-md rounded-md w-full">
                            <h2 className="text-4xl text-white font-semibold mb-8">
                                {variant === 'login' ? 'Sign In' : 'Register'}    
                            </h2>
                            <div className='flex flex-col gap-4 '>
                                {variant === 'register' && (
                                    <Input 
                                        id="name"
                                        label="Username"
                                        onChange={(e:any) => {setName(e.target.value)}}
                                        type="name"
                                        value={name}
                                    />
                                )}
                                <Input 
                                    id="email"
                                    label="Email"
                                    onChange={(e:any) => {setEmail(e.target.value)}}
                                    type="email"
                                    value={email}
                                />   
                                <Input 
                                    id="password"
                                    label="Password"
                                    onChange={(e:any) => {setPassword(e.target.value)}}
                                    type="password"
                                    value={password}
                                />                          
                            </div>
                            <button className="bg-red-600 w-full text-white py-3 mt-10 font-bold rounded-md hover:bg-red-700 transition">
                                {variant === 'login' ? 'Login' : 'Sign Up'}
                            </button>
                            <p className="text-neutral-500 mt-12">
                                    {variant === 'login' ? "Don't have an account?" : 'Already have an account?'}
                                <span onClick={toggleVariant} className="ml-1 text-white font-bold cursor-pointer hover:underline ">
                                    {variant === 'login' ? 'Create an Account' : 'Sign In'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;