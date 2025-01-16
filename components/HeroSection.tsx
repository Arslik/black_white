import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="relative mt-20 w-full max-w-md h-48 mx-auto p-6 bg-[#87A0FF] bg-opacity-50 border-2 border-[#677FDA] rounded-lg shadow-lg">
            <div className="flex flex-col items-start">
                <h1 className="text-[14px] font-medium text-[#677FDA] mb-2">
                    УСТАЛИ СНИМАТЬ
                    <br/>
                    <span className="text-white bg-[#677FDA] px-1 py-0.5 rounded-md">
                 НЕ КАЧЕСТВЕННЫЙ
                </span>
                    <br/>
                    КОНТЕНТ?
                </h1>
                <p className="text-[7px] font-bold text-white mt-2 border-l-2 border-[#677FDA] pl-2 z-10">
                    <span className="text-[#677FDA]">TOLQYN PRODUCTION</span> УЖЕ ЖДЕТ
                    <br/>
                    ВАС ДЛЯ СОТРУДНИЧЕСТВА
                </p>
                <button className="flex items-center gap-2 text-[7px] font-medium text-white mt-2 bg-[#677FDA] px-2 py-1 rounded-[2.62px] z-10">Оставить заявку
                <Image src={"/arrow.svg"} alt={"Arrow"} width={7} height={3} /></button>
            </div>
            
            <div className="absolute top-[-20px] right-0 z-50">
                <Image
                    src="/camera.png"
                    alt="Camera"
                    width={160}
                    height={207}
                    priority
                />
            </div>
            <div className="absolute top-[73px] right-0 z-0">
                <Image src={"/circles.png"} alt={"circles"} width={160} height={207} />
            </div>
        </div>
    );
}
