import Image from "next/image";

export default function ContactFormSection(){
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-[#faf6f0]">
            {/* Main Title */}
            <h1 className="text-[#6278C7] text-3xl lg:text-4xl font-bold text-center mb-8">
                ЗАИНТЕРЕСОВАНЫ В СОТРУДНИЧЕСТВЕ?
            </h1>

            {/* Content Section */}
            <div className=" w-full max-w-4xl flex flex-col">
                {/* Image */}
                <div className="relative flex">
                    <Image
                        src="/photographer.png" // Replace with your image
                        alt="Photographer"
                        width={250}
                        height={300}
                        className="rounded-lg mt-4"
                    />
                        <p className="absolute top-4 text-right right-[-2px] text-[#6278C7] text-[10px] font-medium max-w-[200px]">
                            ТОГДА ОСТАВЛЯЙТЕ ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ
                        </p>
                        <Image src={'/way.svg'} alt={"Way"} width={100} height={300} className="mt-16"/>
                </div>

                {/* Form Section */}
                <div className="bg-[#6278C7] text-white rounded-[19px] p-6">
                    <h2 className="text-xl font-bold mb-2">ЗАПОЛНИТЕ ФОРМУ</h2>
                    <p className="text-sm mb-6">
                        МЫ ЖДЕМ ИМЕННО ВАШУ ЗАЯВКУ, ОСТАВЬТЕ ЕЕ НИЖЕ
                    </p>

                    <form className="flex flex-col gap-4">
                        {/* Name Field */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm mb-1">
                                ИМЯ*
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="px-4 py-2 rounded-lg text-black outline-none"
                                placeholder="Введите ваше имя"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-sm mb-1">
                                НОМЕР ТЕЛЕФОНА*
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="px-4 py-2 rounded-lg text-black outline-none"
                                placeholder="Введите ваш номер телефона"
                            />
                        </div>

                        {/* Company Field */}
                        <div className="flex flex-col">
                            <label htmlFor="company" className="text-sm mb-1">
                                КОМПАНИЯ*
                            </label>
                            <input
                                type="text"
                                id="company"
                                className="px-4 py-2 rounded-lg text-black outline-none"
                                placeholder="Введите название вашей компании"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-white text-[#6278C7] font-bold py-3 rounded-lg mt-4 hover:bg-gray-100 transition"
                        >
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}