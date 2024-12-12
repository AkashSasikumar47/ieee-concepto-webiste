import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <header className="relative w-full h-screen mb-8 overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                {/* Video Background with full height */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => console.log("Video ended")}
                >
                    <source src="\assets\video\hero_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
            <div className="flex flex-col items-center justify-center h-full text-center p-4 lg:px-36 relative z-10">
                <motion.h1
                    className="mt-18 mb-8 lg:mb-10 font-sans font-bold text-white text-4xl md:text-6xl xl:text-8xl 2xl:text-10xl"
                    initial={{ opacity: 0, y: 100, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    transition={{
                        duration: 2.5,
                        ease: [0.6, -0.05, 0.2, 1.5],
                        delay: 0.5,
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 2,
                        transition: { duration: 0.3 },
                    }}
                >
                    CONCEPTO
                </motion.h1>
                <motion.p
                    className="mb-2 font-sans font-medium text-white text-lg sm:text-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                >
                    CONCEPTS TO CREATIONS
                </motion.p>
                <motion.div
                    className="animate-bounce text-white mt-12"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;