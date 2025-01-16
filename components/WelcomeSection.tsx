import Image from "next/image";

export default function WelcomeSection() {
    return (
        <div className="flex flex-row items-center justify-center pr-4">
            {/* Microphone Image */}
            <div className="mb-6">
                <Image
                    src="/microphone.png" // Replace with the path to your microphone image
                    width={400}
                    height={500}
                    alt="Microphone"
                    className="mx-auto left-0"
                />
            </div>
            {/* Text and Button Section */}
            <div className="text-left">
                {/* Heading */}
                <h1 className="text-[#6278C7] text-[11px] font-semibold">
                    ДОБРО ПОЖАЛОВАТЬ В TOLQYN PRODUCTION — ВАШУ ТВОРЧЕСКУЮ ВОЛНУ В МИРЕ
                    КОНТЕНТА!
                </h1>
                {/* Button */}
                <div className="relative mt-6">
                    <button className="rounded-[7px] bg-[#6278C7] text-white px-8 py-3 text-[8px] font-semibold hover:bg-[#536FD7] transition-all">
                        ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ О НАС
                    </button>
                    <Image src={"/arrows.png"} alt={"Arrows"} width={175} height={29} className="ml-6 mt-2" />
                </div>
            </div>
        </div>
    );
}
