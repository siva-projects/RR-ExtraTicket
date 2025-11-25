import React from 'react';

export const LandingPage = () => {

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-300 flex flex-col items-center justify-center font-sans animate-gradient">
            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background: linear-gradient(-45deg, #ffffff, #cce7ff, #3399ff, #003366);
                    background-size: 400% 400%;
                    animation: gradientShift 10s ease infinite;
                }
            `}</style>
            {/* Background Blurred Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <h1
                    className="text-[25vw] sm:text-[30vh] md:text-[15vw] font-black opacity-80 blur-[1px] tracking-tighter leading-none text-blue-600 [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 md:[writing-mode:horizontal-tb] md:rotate-0"
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
                    <button className="bg-white/30 backdrop-blur-md text-black h-10 w-20 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                        Menu
                    </button>
                </div>
            </div>
        </div>
    );
};
