import Image from "next/image";

export default function StepsSection(){
    return (
        <div className="flex flex-col items-center py-16 px-4">
            {/* Title */}
            <div className="">
                <h2 className="text-[#6278C7] text-3xl font-bold mb-8 relative">
                    ШАГИ РАБОТЫ
                    {/* Footprints */}
                    <span className="absolute bottom-[-20px] -right-24 transform -translate-x-1/2">
              <Image
                  src="/steps.svg"
                  alt="Footprints"
                  width={60}
                  height={80}
              />
            </span>
                </h2>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-16">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/step1.png"
                        alt="Step 1"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <div className="text-center text-[#6278C7] mt-4">
                        <h3 className="text-[54px] font-semibold relative">
                            ШАГ 1
                            {/* Arrow */}
                            <span className="absolute bottom-[-20px] left-0 mx-auto w-20 h-20">
                <Image
                    src="/arrow-left.svg" // Replace with your arrow image
                    alt="Arrow"
                    width={50}
                    height={160}
                />
              </span>
                        </h3>
                        <p className="text-[18px]">
                            ОЗНАКОМЛЕНИЕ С ПРОЕКТОМ И НАПИСАНИЕ СЦЕНАРИЯ
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/step2.png" // Replace with your Step 2 image
                        alt="Step 2"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <div className="text-center text-[#6278C7] mt-4">
                        <h3 className="text-[54px] font-semibold relative">
                            ШАГ 2
                            {/* Arrow */}
                            <span className="absolute -right-8 mx-auto w-20 h-20">
                <Image
                    src="/arrow-right.svg" // Replace with your arrow image
                    alt="Arrow"
                    width={50}
                    height={160}
                />
              </span>
                        </h3>
                        <p className="text-[18px]">СЪЕМКА И МОНТАЖ ВИДЕОРОЛИКА</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/step3.png" // Replace with your Step 3 image
                        alt="Step 3"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <div className="text-center text-[#6278C7] mt-4">
                        <div className="flex items-center gap-4">
                            <Image src={"/star.svg"} alt={"star"} width={35} height={35} />
                            <h3 className="text-[54px] font-semibold relative">
                                ШАГ 3
                            </h3>
                            <Image src={"/star.svg"} alt={"star"} width={35} height={35} />
                        </div>
                        <p className="text-[18px]">СДАЧА РАБОТЫ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}