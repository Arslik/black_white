'use client'
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({ name: "", phone: "", company: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwq0xvX1Xkgm1GZ_pw0iIsne39whRVZfTWArwd_tJOkghB6mRMLwPvmd7nmZgx_-xAk/exec",
                {
                    method: "POST",
                    mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            if (result.status === "success") {
                setMessage("Your data has been submitted successfully!");
                setFormData({ name: "", phone: "", company: "" });
            } else {
                setMessage("Данные были отправлены!");
                setFormData({ name: "", phone: "", company: "" });
            }
        } catch (error: unknown) {
            console.error("Error:", error instanceof Error ? error.message : error);
            setMessage("Данные были отправлены!");
            setFormData({ name: "", phone: "", company: "" });
        }
    };

    return (
        <div id="contact" className="flex flex-col items-center justify-center py-16 px-4">
            <h1 className="text-[#6278C7] text-3xl lg:text-4xl font-bold text-center mb-8">
                ЗАИНТЕРЕСОВАНЫ В СОТРУДНИЧЕСТВЕ?
            </h1>

            <div className="w-full max-w-4xl flex flex-col">
                <div className="relative flex">
                    <Image
                        src="/photographer.png"
                        alt="Photographer"
                        width={250}
                        height={300}
                        className="rounded-lg mt-4"
                    />
                    <p className="absolute top-4 text-right right-[-2px] text-[#6278C7] text-[10px] lg:text-[14px] font-medium max-w-[200px]">
                        ТОГДА ОСТАВЛЯЙТЕ ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ
                    </p>
                    <Image src={'/way.svg'} alt={"Way"} width={80} height={300} className="mt-16"/>
                </div>

                <div className="bg-[#6278C7] text-white rounded-[19px] p-6">
                    <h2 className="text-xl font-bold mb-2">ЗАПОЛНИТЕ ФОРМУ</h2>
                    <p className="text-sm mb-6">
                        МЫ ЖДЕМ ИМЕННО ВАШУ ЗАЯВКУ, ОСТАВЬТЕ ЕЕ НИЖЕ
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm mb-1">
                                ИМЯ*
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-lg text-black outline-none"
                                placeholder="Введите ваше имя"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-sm mb-1">
                                НОМЕР ТЕЛЕФОНА*
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-lg text-black outline-none"
                                placeholder="Введите ваш номер телефона"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="company" className="text-sm mb-1">
                                КОМПАНИЯ*
                            </label>
                            <input
                                type="text"
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-lg text-black outline-none"
                                placeholder="Введите название вашей компании"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-white text-[#6278C7] font-bold py-3 rounded-lg mt-4 hover:bg-gray-100 transition"
                        >
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                    </form>
                    {message && <p className="mt-4 text-sm text-white">{message}</p>}
                </div>
            </div>
        </div>
    );
}
