export default function ReadBelowSection() {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            {/* Top Text */}
            <div className="text-center text-[#677FDA] border-b-2 border-[#677FDA] text-lg font-medium">
                ЧИТАЙТЕ НИЖЕ
            </div>
            {/* Arrow */}
            <div className="text-[#6278C7] text-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 16l-6-6h12l-6 6z" />
                </svg>
            </div>
            {/* Buttons Section */}
            <div className="relative mt-8">
                {/* Left Button */}
                <div className="absolute right-[75px] z-10 flex items-center justify-center rounded-[19px] bg-[#536FD7] px-2 py-1 text-white text-[30px] font-medium">
                    TOLQYN <span className="text-[7px] ml-2 pt-4">PROD.</span>
                </div>
                {/* Right Button */}
                <div className="relative -right-20 flex items-center justify-center rounded-[19px] border border-[#677FDA] px-2 py-1 text-[#677FDA] text-[30px] font-medium">
                    КТО МЫ?
                </div>
            </div>
        </div>
    );
}
