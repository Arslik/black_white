import Image from "next/image";

export default function WhyUsSection() {
    return (
        <div className="relative flex flex-col items-center justify-center py-16 px-4">
            {/* Decorative Element */}
            <div className="absolute top-4 right-0">
                <Image
                    src="/decorative-element.png"
                    width={115}
                    height={108}
                    alt="Decorative Element"
                />
            </div>
            <div className="relative mt-20 mr-24 w-[239px] h-[46px]">
                <Image
                    src="/union.png"
                    alt="Union"
                    layout="fill"
                    objectFit="contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#6278C7] text-[43px] lg:text-4xl font-medium">
            ПОЧЕМУ
          </span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="mt-2 ml-6 rounded-[4px] bg-[#6278C7] text-white px-2 py-1 text-[33px] lg:text-2xl font-medium">
                    ИМЕННО МЫ?
                </div>
                <Image src={"/cursor.png"} alt={"Cursor"} width={20} height={20} className="mb-4 ml-2" />
            </div>
        </div>
    );
}
