import Image from "next/image";

export default function Header() {
    return (
        <header className="border-b-2 border-blue-700">
            <div className=" container mx-auto px-4 py-2 flex justify-between items-center">
                {/* Left Section: Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-700">
                        <Image src={"/whatsapp.svg"} alt={"WhatsApp"} width={24} height={24} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </a>
                    <a href="#" className="text-blue-700">
                        <Image src={"/telegram.svg"} alt={"Telegram"} width={24} height={24} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </a>
                    <a href="#" className="text-blue-700">
                        <Image src={"/instagram.svg"} alt={"Instagram"} width={24} height={24} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </a>
                </div>

                {/* Center Section: Logo */}
                <div className="flex-grow flex justify-center">
                    <Image
                        src={"/logo.png"}
                        alt={"Tolqyn"}
                        width={103}
                        height={61}
                        className="sm:w-24 sm:h-auto lg:w-36 mr-8"
                    />
                </div>

                {/* Right Section: Menu */}
                <div>
                    <button className="text-blue-700">
                        <Image
                            src={"/menu.svg"}
                            alt={"Menu"}
                            width={23}
                            height={12}
                            className="sm:w-5 sm:h-auto lg:w-6"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
