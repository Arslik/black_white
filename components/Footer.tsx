import Image from "next/image";

export default function Footer(){
    return (
        <footer className="bg-[#6278C7] text-white py-4 px-3">
            <div className="flex items-center justify-between gap-1 max-w-6xl mx-auto">
                {/* Left Section - Contact Information */}
                <div className="text-sm">
                    <h3 className="text-sm mb-2">Контакты:</h3>
                    <p className="text-[9px]">
                        <span className="text-xs">8 (705) 298-04-97</span> - Арсен Дюсенбаев
                    </p>
                </div>

                {/* Center Section - Logo */}
                <div className="">
                    <Image
                        src="/logo-white.svg" // Replace with your logo file
                        alt="Tolqyn Logo"
                        width={200}
                        height={100}
                    />
                </div>

                {/* Right Section - Legal Info and Social Media */}
                <div className="text-[9px] text-right">
                    <p className="mb-2">
                        Юридическая информация
                        <br/>
                        Политика конфиденциальности
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://wa.me/77052980497" target="_blank" rel="noreferrer noopener"
                           className="text-blue-700">
                            <Image
                                src={"/wp.svg"}
                                alt={"WhatsApp"}
                                width={24}
                                height={24}
                                className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                            />
                        </a>
                        <a href="https://www.tiktok.com/@tolqynproduction?_t=ZM-8tDra7SbrnS&_r=1" target="_blank"
                           rel="noreferrer noopener" className="text-blue-700">
                            <Image
                                src={"/tt.svg"}
                                alt={"Tiktok"}
                                width={24}
                                height={24}
                                className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                            />
                        </a>
                        <a href="https://www.instagram.com/tolqynproduction/" target="_blank" rel="noreferrer noopener"
                           className="text-blue-700">
                            <Image
                                src={"/inst.svg"}
                                alt={"Instagram"}
                                width={24}
                                height={24}
                                className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}