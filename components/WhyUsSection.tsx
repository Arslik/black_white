'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";

export default function WhyUsSection() {
    const { scrollY } = useScroll();

    // Extended Parallax effects for smoother animation
    const decorativeY = useTransform(scrollY, [0, 800], [80, 0]);  // Moves decorative element up slower
    const headingX = useTransform(scrollY, [0, 800], [-300, 0]);   // Moves "ПОЧЕМУ" from left to right
    const textX = useTransform(scrollY, [0, 800], [-300, 0]);       // Moves "ИМЕННО МЫ?" from left to right
    const cursorX = useTransform(scrollY, [0, 800], [-300, 0]);     // Moves cursor from left to right

    return (
        <motion.div
            id="why"
            className="relative flex flex-col items-center justify-center py-16 px-4 md:py-24 md:px-8 lg:py-32 lg:px-16"
        >
            {/* Decorative Element */}
            <motion.div
                style={{ y: decorativeY }}
                className="absolute top-8 lg:top-28 right-0"
            >
                <Image
                    src="/decorative-element.png"
                    width={115}
                    height={108}
                    alt="Decorative Element"
                    className="md:w-[150px] md:h-[140px] lg:w-[100px] lg:h-[150px]"
                />
            </motion.div>

            {/* Heading Section */}
            <motion.div
                style={{ x: headingX }}
                className="relative mt-20 mr-24 md:mr-32 lg:mr-40 w-[239px] h-[46px] md:w-[300px] md:h-[60px] lg:w-[400px] lg:h-[80px]"
            >
                <Image
                    src="/union.png"
                    alt="Union"
                    layout="fill"
                    objectFit="contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#6278C7] text-[43px] md:text-[60px] lg:text-[80px] font-medium">
                        ПОЧЕМУ
                    </span>
                </div>
            </motion.div>

            {/* Text and Cursor Section */}
            <motion.div style={{ x: textX }} className="flex items-center">
                <div className="mt-2 ml-6 rounded-[4px] bg-[#6278C7] text-white px-2 py-1 text-[33px] md:text-[45px] lg:text-[60px] font-medium">
                    ИМЕННО МЫ?
                </div>
                <motion.div style={{ x: cursorX }}>
                    <Image
                        src={"/cursor.png"}
                        alt={"Cursor"}
                        width={20}
                        height={20}
                        className="mb-4 ml-2 md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
