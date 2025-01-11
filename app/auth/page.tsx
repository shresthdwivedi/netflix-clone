'use client'

import axios from "axios";
import Input from "@/components/Input";
import { useCallback, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";


const Auth = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant(variant === 'login' ? 'register' : 'login');
    }
    ,[variant]);

    // update react state with autofilled values
    useEffect(() => {
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const passwordInput = document.getElementById("password") as HTMLInputElement;

        if (emailInput && passwordInput) {
            setEmail(emailInput.value);
            setPassword(passwordInput.value); 
        }
    }, []);


    const login = useCallback(async()=> {
        try{
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles',

            })
        } catch(error){
            console.log(error);
        }
    },[email, password])

    const register = useCallback(async() => {
        try{
            await axios.post('/api/register', { 
                email,
                name,
                password
            })
            login();
        }
        catch(error){
            console.log(error);
        }
    },[email, name, password, login]);


    return (
        <>
            <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-cover bg-fixed">
                <div className="bg-black h-full w-full lg:bg-opacity-50">
                    <nav className="px-12 py-5 ">
                        <Image src='/images/logo.jpg' alt="netflix-logo" className="h-16 w-32" width={1801} height={756}/>
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
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}}
                                        type="name"
                                        value={name}
                                    />
                                )}
                                <Input 
                                    id="email"
                                    label="Email"
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
                                    type="email"
                                    value={email}
                                />   
                                <Input 
                                    id="password"
                                    label="Password"
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
                                    type="password"
                                    value={password}
                                />                          
                            </div>
                            <button onClick={variant === 'login' ? login : register} className="bg-red-600 w-full text-white py-3 mt-10 font-bold rounded-md hover:bg-red-700 transition">
                                {variant === 'login' ? 'Login' : 'Sign Up'}
                            </button>
                            <div className="flex flex-row justify-center items-center mt-8 gap-10">
                                <div 
                                    onClick={() => {signIn('google', {callbackUrl: '/profiles'})}}
                                    className="h-10 w-10 bg-white rounded-full justify-center flex items-center cursor-pointer">
                                    <FcGoogle size={30} />
                                </div>
                                <div 
                                    onClick={() => {signIn('github', {callbackUrl: '/profiles'})}}
                                    className="h-10 w-10 bg-white rounded-full justify-center flex items-center cursor-pointer">
                                    <FaGithub size={30} />
                                </div>
                            </div>
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