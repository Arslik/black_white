'use client';  // Add this at the top to make the component interactive

import Image from "next/image";

export default function WelcomeSection() {
    const handleDownload = () => {
        const fileUrl = "/catalog.pdf"; // Replace with the actual path to your presentation file
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "TOLQYN_Production_Presentation.pdf"; // Set the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-row items-center justify-center pr-4 md:pr-12 lg:pr-[600px]">
            {/* Microphone Image */}
            <div className="mb-6 md:mb-0 lg:mb-0">
                <Image
                    src="/microphone.png"
                    width={160}
                    height={180}
                    alt="Microphone"
                    className="mx-auto left-0 md:w-[300px] md:h-[400px] lg:w-[450px] lg:h-[600px]"
                />
            </div>
            {/* Text and Button Section */}
            <div className="text-left">
                {/* Heading */}
                <h1 className="text-[#6278C7] text-[11px] md:text-[16px] lg:text-[20px] font-semibold max-w-[300px] md:max-w-[400px] lg:max-w-[500px] leading-tight">
                    ДОБРО ПОЖАЛОВАТЬ В TOLQYN PRODUCTION — ВАШУ ТВОРЧЕСКУЮ ВОЛНУ В МИРЕ
                    КОНТЕНТА!
                </h1>
                {/* Button */}
                <div className="relative mt-6">
                    <button
                        onClick={handleDownload}
                        className="rounded-[7px] bg-[#6278C7] text-white px-8 py-3 text-[8px] md:text-[12px] lg:text-[16px] font-semibold hover:bg-[#536FD7] transition-all"
                    >
                        ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ О НАС
                    </button>
                    <Image
                        src={"/arrows.png"}
                        alt={"Arrows"}
                        width={175}
                        height={29}
                        className="ml-6 mt-2 md:w-[200px] md:h-[35px] lg:w-[250px] lg:h-[45px]"
                    />
                </div>
            </div>
        </div>
    );
}
