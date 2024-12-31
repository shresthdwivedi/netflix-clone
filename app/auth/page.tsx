import Input from '@/components/input'

const Auth = () => {
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
                                Sign In
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <Input />
                                <Input />
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;