import React from "react";
import Image from "next/image";

export default function CatalogSection() {
    return (
        <div id="catalog" className="flex flex-col items-center justify-center py-40 px-4">
            {/* Main Title */}
            <h1 className="text-[#6278C7] text-[60px] text-right lg:text-6xl font-medium mb-8">
                КАТАЛОГ УСЛУГ
            </h1>

            {/* Services */}
            <div className="space-y-6 w-full max-w-4xl">
                {/* Video Production */}
                <div className="flex items-center bg-[#6278C7] rounded-[19px] text-white p-6">
                    <div className="flex-1">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2">
                            ВИДЕОПРОДАКШН:
                        </h2>
                        <ul className="space-y-1 text-[11px] font-light lg:text-base">
                            <li>– СЪЕМКА РИЛСОВ</li>
                            <li>– СЪЕМКА ИМИДЖЕВЫХ РОЛИКОВ</li>
                            <li>– СЪЕМКА ПРЕЗЕНТАЦИОННЫХ РОЛИКОВ</li>
                        </ul>
                    </div>
                    <div className="ml-4 mb-16">
                        <Image
                            src="/video-icon.svg" // Replace with actual icon path
                            alt="Video Production Icon"
                            width={76}
                            height={62}
                        />
                    </div>
                </div>

                {/* Podcasts */}
                <div className="flex items-center bg-[#6278C7] rounded-[19px] text-white p-6">
                    <div className="flex-1">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2">ПОДКАСТЫ:</h2>
                        <ul className="space-y-1 text-[11px] font-light lg:text-base">
                            <li>– СТУДИЯ ЗВУКОЗАПИСИ</li>
                            <li>– ЗАПИСЬ АУДИО И ВИДЕОПОДКАСТОВ</li>
                            <li>– УСЛУГИ МОНТАЖА</li>
                        </ul>
                    </div>
                    <div className="ml-4 mb-16">
                        <Image
                            src="/podcast-icon.svg" // Replace with actual icon path
                            alt="Podcast Icon"
                            width={56}
                            height={56}
                        />
                    </div>
                </div>

                {/* Design Services */}
                <div className="flex items-center bg-[#6278C7] rounded-[19px] text-white p-6">
                    <div className="flex-1">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2">
                            ДИЗАЙН УСЛУГИ:
                        </h2>
                        <ul className="space-y-1 text-[11px] font-light lg:text-base">
                            <li>– ДИЗАЙН ПРЕЗЕНТАЦИЙ</li>
                            <li>– ДИЗАЙН КРЕАТИВОВ И ИНФОГРАФИКИ</li>
                            <li>– ДИЗАЙН ЛОГОТИПОВ И ВЕБ САЙТОВ</li>
                        </ul>
                    </div>
                    <div className="ml-4 mb-20">
                        <Image
                            src="/design-icon.svg" // Replace with actual icon path
                            alt="Design Icon"
                            width={56}
                            height={56}
                        />
                    </div>
                </div>

                {/* SMM Services */}
                <div className="flex items-center bg-[#6278C7] rounded-[19px] text-white p-6">
                    <div className="flex-1">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2">СММ УСЛУГИ:</h2>
                        <ul className="space-y-1 text-[11px] font-light lg:text-base">
                            <li>– ВЕДЕНИЕ ИНСТАГРАМ АККАУНТА</li>
                            <li>– ПОСТРОЕНИЕ КОНТЕНТ-ПЛАНА</li>
                            <li>– ЗАПУСК ТАРГЕТИРОВАННОЙ РЕКЛАМЫ</li>
                        </ul>
                    </div>
                    <div className="ml-4 mb-16">
                        <Image
                            src="/smm-icon.svg" // Replace with actual icon path
                            alt="SMM Icon"
                            width={62}
                            height={62}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
