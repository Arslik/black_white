'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
    const { scrollY } = useScroll();

    // Parallax effects for different elements
    const textY = useTransform(scrollY, [0, 300], [0, -50]);
    const buttonY = useTransform(scrollY, [0, 300], [0, -30]);
    const cameraY = useTransform(scrollY, [0, 300], [0, 80]);
    const circlesY = useTransform(scrollY, [0, 300], [0, 120]);

    return (
        <div className="relative mt-20 w-[90%] sm:w-[85%] md:max-w-2xl lg:max-w-4xl h-48 sm:h-60 md:h-80 lg:h-96 mx-auto p-6 sm:p-8 md:p-12 lg:p-16 bg-[#87A0FF] bg-opacity-50 border-2 border-[#677FDA] rounded-lg shadow-lg overflow-hidden">
            <motion.div style={{ y: textY }} className="flex flex-col items-start">
                <h1 className="text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-medium text-[#677FDA] mb-2">
                    УСТАЛИ СНИМАТЬ
                    <br />
                    <span className="text-white bg-[#677FDA] px-2 sm:px-3 py-1 rounded-md">
                        НЕ КАЧЕСТВЕННЫЙ
                    </span>
                    <br />
                    КОНТЕНТ?
                </h1>
                <p className="text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] font-bold text-white mt-2 border-l-2 border-[#677FDA] pl-2 z-10">
                    <span className="text-[#677FDA]">TOLQYN PRODUCTION</span> УЖЕ ЖДЕТ
                    <br />
                    ВАС ДЛЯ СОТРУДНИЧЕСТВА
                </p>
                <motion.a href="#contact" style={{ y: buttonY }}>
                    <button className="flex items-center gap-2 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] font-medium text-white mt-4 sm:mt-5 md:mt-6 bg-[#677FDA] px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-md z-10">
                        Оставить заявку
                        <Image src={"/arrow.svg"} alt={"Arrow"} width={10} height={5} />
                    </button>
                </motion.a>
            </motion.div>

            <motion.div
                style={{ y: cameraY }}
                className="absolute top-[35px] lg:top-[61px] right-0 z-40"
            >
                <Image
                    src="/camera.png"
                    alt="Camera"
                    width={120}
                    height={150}
                    quality={100}
                    className="sm:w-[160px] sm:h-[200px] md:w-[200px] md:h-[260px] lg:w-[250px] lg:h-[320px]"
                    priority
                />
            </motion.div>
            <motion.div
                style={{ y: circlesY }}
                className="absolute top-[102px] lg:top-[132px] right-0 z-0"
            >
                <Image
                    src={"/circles.png"}
                    alt={"circles"}
                    width={120}
                    height={150}
                    quality={100}
                    className="sm:w-[160px] sm:h-[200px] md:w-[200px] md:h-[260px] lg:w-[250px] lg:h-[250px]"

                />
            </motion.div>
        </div>
    );
}
