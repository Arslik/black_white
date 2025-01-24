'use client'
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <header className="sticky bg-[#F7F2EC] top-0 border-b-2 border-blue-700 z-50">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                {/* Left Section: Icons */}
                <div className="flex space-x-4">
                    <a href="https://wa.me/77052980497" target="_blank" rel="noreferrer noopener" className="text-blue-700">
                        <Image
                            src={"/whatsapp.svg"}
                            alt={"WhatsApp"}
                            width={24}
                            height={24}
                            className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                        />
                    </a>
                    <a href="https://www.tiktok.com/@tolqynproduction?_t=ZM-8tDra7SbrnS&_r=1" target="_blank" rel="noreferrer noopener" className="text-blue-700">
                        <Image
                            src={"/tiktok.svg"}
                            alt={"Tiktok"}
                            width={24}
                            height={24}
                            className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                        />
                    </a>
                    <a href="https://www.instagram.com/tolqynproduction/" target="_blank" rel="noreferrer noopener" className="text-blue-700">
                        <Image
                            src={"/instagram.svg"}
                            alt={"Instagram"}
                            width={24}
                            height={24}
                            className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                        />
                    </a>
                </div>

                {/* Center Section: Logo */}
                <div className="flex-grow flex justify-center">
                    <Image
                        src={"/logo.svg"}
                        alt={"Tolqyn"}
                        width={150}
                        height={100}
                        quality={100}
                        className="sm:w-24 sm:h-auto lg:w-36 mr-8"
                    />
                </div>

                {/* Right Section: Menu Button */}
                <div>
                    <button
                        onClick={toggleNavbar}
                        className="text-blue-700 focus:outline-none"
                    >
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

            {/* Navbar Section */}
            <nav
                className={`fixed top-0 left-0 w-full h-screen bg-[#F7F2EC] border-t-2 border-blue-700 transition-transform transform ${
                    isNavbarOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <ul className="flex flex-col items-center space-y-6 mt-20">
                    <li>
                        <a
                            href="#welcome"
                            onClick={toggleNavbar}
                            className="text-blue-700 text-xl hover:text-blue-500 transition"
                        >
                            Кто мы?
                        </a>
                    </li>
                    <li>
                        <a
                            href="#why"
                            onClick={toggleNavbar}
                            className="text-blue-700 text-xl hover:text-blue-500 transition"
                        >
                            Почему мы?
                        </a>
                    </li>
                    <li>
                        <a
                            href="#catalog"
                            onClick={toggleNavbar}
                            className="text-blue-700 text-xl hover:text-blue-500 transition"
                        >
                            Каталог услуг
                        </a>
                    </li>
                    <li>
                        <a
                            href="#works"
                            onClick={toggleNavbar}
                            className="text-blue-700 text-xl hover:text-blue-500 transition"
                        >
                            Наши работы
                        </a>
                    </li>
                    <li>
                        <a
                            href="#steps"
                            onClick={toggleNavbar}
                            className="text-blue-700 text-xl hover:text-blue-500 transition"
                        >
                            Шаги работы
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={toggleNavbar}
                            className="text-blue-700 text-xl hover:text-blue-500 transition"
                        >
                            Подать заявку
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={toggleNavbar}
                            className="mt-10 px-6 py-2 bg-blue-700 text-white rounded-lg"
                        >
                            Закрыть
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
