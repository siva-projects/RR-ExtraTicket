import React from 'react';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-300 flex flex-col items-center justify-center font-sans animate-gradient">
            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes popIn {
                    0% { opacity: 0; transform: scale(0.9) translateY(10px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-gradient {
                    background: linear-gradient(-45deg, #ffffff, #cce7ff, #3399ff, #003366);
                    background-size: 400% 400%;
                    animation: gradientShift 10s ease infinite;
                }
                .animate-pop-in {
                    animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
            `}</style>
            {/* Background Blurred Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <h1
                    className="text-[25vw] sm:text-[30vh] md:text-[15vw] font-black opacity-80 blur-[1px] tracking-tighter leading-none text-white [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 md:[writing-mode:horizontal-tb] md:rotate-0"
                >
                    EXTRATICKET
                </h1>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-8">
                {/* Middle/Side Text */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 -rotate-90 origin-left">
                    <p className="text-gray-500 font-bold text-sm tracking-wide whitespace-nowrap">
                        ExtraTicket.com
                    </p>
                </div>

                {/* Bottom Menu Button */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                    {/* Auth Button in Navbar */}
                    {isAuthenticated ? (
                        showMenu ? (
                            <div className="flex space-x-1 bg-white/30 backdrop-blur-md text-black h-10 w-fit px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 animate-pop-in items-center">
                                {[
                                    { name: "Home", path: "/Home" },
                                    { name: "Products", path: "/Products" },
                                    { name: "Contact", path: "/Contact" },
                                    { name: "About", path: "/About" },
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="px-1 hover:scale-110 transition-transform duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                {/* Add Logout Button here */}
                                <button
                                    onClick={() =>
                                        logout({
                                            logoutParams: {
                                                returnTo: window.location.origin,
                                            },
                                        })
                                    }
                                    className="text-red-600 hover:text-red-800 transition-colors ml-4"
                                >
                                    Log out
                                </button>
                            </div>
                        ) :
                            (
                                <button className="bg-white/30 backdrop-blur-md text-black h-10 w-20 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300" onClick={() => setShowMenu(true)}>
                                    Menu
                                </button>
                            )


                    ) : (
                        <button
                            onClick={() => loginWithRedirect()}
                            className="bg-white/30 backdrop-blur-md text-black h-10 w-20 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            Log in
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
