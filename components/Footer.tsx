import Image from "next/image";

export default function Footer(){
    return (
        <footer className="bg-[#6278C7] text-white py-4 px-8">
            <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto">
                {/* Left Section - Contact Information */}
                <div className="text-sm">
                    <h3 className="text-sm mb-2">Контакты:</h3>
                    <p className="text-[9px]">
                        <span className="text-xs">8 (705) 298-04-97</span> - Арсен Дюсенбаев
                        <br/>
                        Республика Казахстан,
                        <br/>
                        г. Астана, ул. Токтанова 10
                    </p>
                </div>

                {/* Center Section - Logo */}
                <div className="flex flex-col text-[9px]">
                    <Image
                        src="/logo-white.svg" // Replace with your logo file
                        alt="Tolqyn Logo"
                        width={120}
                        height={40}
                    />
                    <p className="text-[9px] mt-2">оперативное медиа производство</p>
                </div>

                {/* Right Section - Legal Info and Social Media */}
                <div className="text-[9px] text-right">
                    <p className="mb-2">
                        Юридическая информация
                        <br/>
                        Политика конфиденциальности
                    </p>
                    <div className="flex justify-end space-x-4">
                        <a href="#" aria-label="Website">
                            <Image
                                src="/website.svg" // Replace with globe icon file
                                alt="Website"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Image
                                src="/inst.svg" // Replace with Instagram icon file
                                alt="Instagram"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a href="#" aria-label="WhatsApp">
                            <Image
                                src="/wp.svg" // Replace with WhatsApp icon file
                                alt="WhatsApp"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}