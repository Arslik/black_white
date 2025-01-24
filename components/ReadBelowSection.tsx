'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ReadBelowSection() {
    const { scrollY } = useScroll();

    // Parallax effects for different elements
    const textY = useTransform(scrollY, [0, 300], [0, -40]); // Moves text upwards
    const arrowY = useTransform(scrollY, [0, 300], [0, 20]); // Moves arrow downwards
    const leftButtonX = useTransform(scrollY, [0, 300], [0, -30]); // Moves left button leftwards
    const rightButtonX = useTransform(scrollY, [0, 300], [0, 30]); // Moves right button rightwards

    return (
        <div id="welcome" className="flex flex-col items-center justify-center py-16 px-4 md:py-24 md:px-8 lg:py-32 lg:px-16">
            {/* Top Text */}
            <motion.div
                style={{ y: textY }}
                className="text-center text-[#677FDA] border-b-2 border-[#677FDA] text-lg font-medium md:text-2xl lg:text-3xl"
            >
                ЧИТАЙТЕ НИЖЕ
            </motion.div>

            {/* Arrow */}
            <motion.div style={{ y: arrowY }} className="text-[#6278C7] text-sm mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto md:w-12 md:h-12 lg:w-16 lg:h-16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 16l-6-6h12l-6 6z" />
                </svg>
            </motion.div>

            {/* Buttons Section */}
            <div className="relative mt-8 md:mt-12 lg:mt-16">
                {/* Left Button */}
                <motion.div
                    style={{ x: leftButtonX }}
                    className="absolute right-[75px] md:right-[120px] lg:right-[140px] z-10 flex items-center justify-center rounded-[19px] bg-[#536FD7] px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-white text-[30px] md:text-[40px] lg:text-[50px] font-medium"
                >
                    TOLQYN <span className="text-[7px] md:text-[10px] lg:text-[14px] ml-2 pt-4">PROD.</span>
                </motion.div>

                {/* Right Button */}
                <motion.div
                    style={{ x: rightButtonX }}
                    className="relative -right-20 md:-right-32 lg:-right-36 flex items-center justify-center rounded-[19px] border border-[#677FDA] px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-[#677FDA] text-[30px] md:text-[40px] lg:text-[50px] font-medium"
                >
                    КТО МЫ?
                </motion.div>
            </div>
        </div>
    );
}
