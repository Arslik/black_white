import Image from "next/image";

export default function StepsSection() {
    return (
        <div id="steps" className="flex flex-col items-center py-16 px-4 md:py-24 md:px-8 lg:py-32 lg:px-16">
            {/* Title */}
            <div className="relative">
                <h2 className="text-[#6278C7] text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                    ШАГИ РАБОТЫ
                    {/* Footprints */}
                    <span className="absolute bottom-[-20px] -right-20 md:-right-28 lg:-right-36 transform -translate-x-1/2">
                        <Image
                            src="/steps.svg"
                            alt="Footprints"
                            width={60}
                            height={80}
                            className="md:w-[80px] md:h-[100px] lg:w-[100px] lg:h-[120px]"
                        />
                    </span>
                </h2>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/step1.png"
                        alt="Step 1"
                        width={300}
                        height={200}
                        className="rounded-lg md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px]"
                    />
                    <div className="text-center text-[#6278C7] mt-4">
                        <h3 className="text-[54px] md:text-[64px] lg:text-[74px] font-semibold relative">
                            ШАГ 1
                            {/* Arrow */}
                            <span className="md:hidden lg:hidden absolute bottom-[-20px] left-0 mx-auto w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
                                <Image
                                    src="/arrow-left.svg"
                                    alt="Arrow"
                                    width={50}
                                    height={160}
                                />
                            </span>
                        </h3>
                        <p className="text-[18px] md:text-[22px] lg:text-[26px]">
                            ОЗНАКОМЛЕНИЕ С ПРОЕКТОМ И НАПИСАНИЕ СЦЕНАРИЯ
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/step2.png"
                        alt="Step 2"
                        width={300}
                        height={200}
                        className="rounded-lg md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px]"
                    />
                    <div className="text-center text-[#6278C7] mt-4">
                        <h3 className="text-[54px] md:text-[64px] lg:text-[74px] font-semibold relative">
                            ШАГ 2
                            {/* Arrow */}
                            <span className="md:hidden lg:hidden absolute -right-4 md:-right-6 lg:-right-8 mx-auto w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
                                <Image
                                    src="/arrow-right.svg"
                                    alt="Arrow"
                                    width={50}
                                    height={160}
                                />
                            </span>
                        </h3>
                        <p className="text-[18px] md:text-[22px] lg:text-[26px]">СЪЕМКА И МОНТАЖ ВИДЕОРОЛИКА</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/step3.png"
                        alt="Step 3"
                        width={300}
                        height={200}
                        className="rounded-lg md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px]"
                    />
                    <div className="text-center text-[#6278C7] mt-4">
                        <div className="flex items-center gap-4">
                            <Image
                                src={"/star.svg"}
                                alt={"star"}
                                width={35}
                                height={35}
                                className="md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px]"
                            />
                            <h3 className="text-[54px] md:text-[64px] lg:text-[74px] font-semibold relative">
                                ШАГ 3
                            </h3>
                            <Image
                                src={"/star.svg"}
                                alt={"star"}
                                width={35}
                                height={35}
                                className="md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px]"
                            />
                        </div>
                        <p className="text-[18px] md:text-[22px] lg:text-[26px]">СДАЧА РАБОТЫ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
