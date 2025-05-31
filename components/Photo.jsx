"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 0.4, ease: "easeIn" },
                }}
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
                    }}

                    className="w-[250px] h-[250px] xl:w-[420px] xl:h-[420px] mix-blend-lighten absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    <Image
                        // src="./assets/profile.png"
                        src="/assets/profile_1.png"
                        priority
                        quality={100}
                        fill
                        alt='my-profile'
                        className="object-contain"
                    />
                </motion.div>

                {/* Backgroud Circle */}
                <motion.svg
                    className="w-[270px] xl:w-[450px] h-[270px] xl:h-[450px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253" 
                        cy="253" 
                        r="250" 
                        stroke="#00ff99" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        initial={{ strokeDasharray: "24 10 0 0" }} 
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo