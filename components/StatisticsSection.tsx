import Image from "next/image";

export default function StatisticsSection() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 px-4">
            {/* Card 1 */}
            <div className="flex z-20 flex-col items-center bg-white rounded-[19px] overflow-hidden shadow-md w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
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
            </div>

            {/* Card 2 */}
            <div className="flex flex-col z-20 items-center bg-white rounded-[19px] overflow-hidden shadow-md w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
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
            </div>

            {/* Card 3 */}
            <div className="flex flex-col z-20 items-center bg-white rounded-[19px] overflow-hidden shadow-md w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
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
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-40 left-0 z-0 md:block">
                <Image
                    src="/decorStats.png"
                    alt="Decorative Element"
                    width={700}
                    height={300}
                />
            </div>
        </div>
    );
}
