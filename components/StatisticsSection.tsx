import Image from "next/image";

export default function StatisticsSection() {
    return (
        <div className="relative flex flex-col items-center justify-center px-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white rounded-[19px] overflow-hidden mb-8 shadow-md">
                <Image
                    src="/video-production.png"
                    alt="Video Production"
                    width={250}
                    height={150}
                    className="object-cover w-full h-[200px]"
                />
                <div className="bg-[#6278C7] w-full h-24 py-4 text-center text-white text-xl font-medium pt-6">
                    <div className="flex flex-row items-center gap-4">
                        <span className="text-[68px] ml-8">70+</span>
                        <span className="text-sm text-left font-medium"> ОТСНЯТЫХ ВИДЕОРОЛИКОВ</span>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-white rounded-[19px] overflow-hidden mb-8 shadow-md">
                <Image
                    src="/business-meeting.png"
                    alt="Business Meeting"
                    width={250}
                    height={150}
                    className="object-cover w-full h-[200px]"
                />
                <div className="bg-[#6278C7] w-full h-24 py-4 text-center text-white text-xl font-medium pt-6">
                    <div className="flex flex-row items-center gap-4">
                        <span className="text-[68px] ml-8">3,5+</span>
                        <span className="text-sm text-left font-medium"> ГОДА <br/> НА РЫНКЕ</span>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center bg-white rounded-[19px] overflow-hidden mb-8 shadow-md z-20">
                <Image
                    src="/happy-clients.png"
                    alt="Happy Clients"
                    width={300}
                    height={200}
                    className="object-cover w-full h-[200px]"
                />
                <div className="bg-[#6278C7] w-full h-24 py-4 text-center text-white text-xl font-medium pt-6">
                    <div className="flex flex-row items-center gap-4">
                        <span className="text-[68px] ml-8">90%</span>
                        <span className="text-sm text-left font-medium"> ДОВОЛЬНЫХ КЛИЕНТОВ</span>
                    </div>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-40 left-0 z-0">
                <Image
                    src="/decorStats.png" // Replace with the actual path to your decorative element
                    alt="Decorative Element"
                    width={700}
                    height={300}
                />
            </div>
        </div>
    );
}
