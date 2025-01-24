'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";

export default function StatisticsSection() {
    const { scrollY } = useScroll();

    // Parallax effects for different elements
    const card1Y = useTransform(scrollY, [0, 1200], [50, -50]); // Moves first card up
    const card2Y = useTransform(scrollY, [0, 1300], [100, -50]); // Moves second card up
    const card3Y = useTransform(scrollY, [0, 1400], [150, -50]); // Moves third card up
    const decorY = useTransform(scrollY, [0, 1600], [100, -20]); // Moves decorative element up

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 px-4">
            {/* Card 1 */}
            <motion.div
                style={{ y: card1Y }}
                className="flex z-20 flex-col items-center bg-white rounded-[19px] overflow-hidden shadow-md w-full sm:w-[350px] md:w-[400px] lg:w-[450px]"
            >
                <Image
                    src="/video-production.png"
                    alt="Video Production"
                    width={400}
                    height={250}
                    className="object-cover w-full h-[200px]"
                />
                <div className="bg-[#6278C7] w-full h-24 py-4 text-center text-white text-xl font-medium pt-6">
                    <div className="flex flex-row items-center gap-4 px-6">
                        <span className="text-[58px] sm:text-[68px]">70+</span>
                        <span className="text-sm sm:text-base text-left font-medium"> ОТСНЯТЫХ ВИДЕОРОЛИКОВ</span>
                    </div>
                </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                style={{ y: card2Y }}
                className="flex flex-col z-20 items-center bg-white rounded-[19px] overflow-hidden shadow-md w-full sm:w-[350px] md:w-[400px] lg:w-[450px]"
            >
                <Image
                    src="/business-meeting.png"
                    alt="Business Meeting"
                    width={400}
                    height={250}
                    className="object-cover w-full h-[200px]"
                />
                <div className="bg-[#6278C7] w-full h-24 py-4 text-center text-white text-xl font-medium pt-6">
                    <div className="flex flex-row items-center gap-4 px-6">
                        <span className="text-[58px] sm:text-[68px]">3,5+</span>
                        <span className="text-sm sm:text-base text-left font-medium"> ГОДА <br /> НА РЫНКЕ</span>
                    </div>
                </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
                style={{ y: card3Y }}
                className="flex flex-col z-20 items-center bg-white rounded-[19px] overflow-hidden shadow-md w-full sm:w-[350px] md:w-[400px] lg:w-[450px]"
            >
                <Image
                    src="/happy-clients.png"
                    alt="Happy Clients"
                    width={400}
                    height={250}
                    className="object-cover w-full h-[200px]"
                />
                <div className="bg-[#6278C7] w-full h-24 py-4 text-center text-white text-xl font-medium pt-6">
                    <div className="flex flex-row items-center gap-4 px-6">
                        <span className="text-[58px] sm:text-[68px]">90%</span>
                        <span className="text-sm sm:text-base text-left font-medium"> ДОВОЛЬНЫХ КЛИЕНТОВ</span>
                    </div>
                </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div style={{ y: decorY }} className="absolute -bottom-40 left-0 z-0 md:block">
                <Image
                    src="/decorStats.png"
                    alt="Decorative Element"
                    width={700}
                    height={300}
                />
            </motion.div>
        </div>
    );
}
