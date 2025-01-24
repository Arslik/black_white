'use client'
import React, { useState, useRef } from "react";

export default function VideoPlayer() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [isPlaying, setIsPlaying] = useState<number | null>(null);

    const videos = [
        "/1.mp4",
        "/2.mp4",
        "/3.mp4",
    ];

    const togglePlay = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            if (isPlaying === index) {
                video.pause();
                setIsPlaying(null);
            } else {
                video.play();
                setIsPlaying(index);
            }
        }
    };

    const handleSeek = (index: number, forward: boolean) => {
        const video = videoRefs.current[index];
        if (video) {
            video.currentTime = forward
                ? Math.min(video.duration, video.currentTime + 10)
                : Math.max(0, video.currentTime - 10);
        }
    };

    const scrollCarousel = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div id="works" className="flex flex-col items-center justify-center py-16 px-4">
            {/* Title */}
            <h1 className="text-[#6278C7] text-[30px] lg:text-5xl font-bold mb-8">
                НАШИ РАБОТЫ →
            </h1>

            {/* Video Carousel */}
            <div className="relative w-full max-w-6xl">
                <div
                    ref={carouselRef}
                    className="flex space-x-8 overflow-x-scroll md:overflow-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth"
                >
                    {videos.map((videoSrc, index) => (
                        <div
                            key={index}
                            className="min-w-[100%] md:min-w-[32%] flex-shrink-0 snap-center"
                        >
                            <div className="bg-[#6278C7] rounded-[19px] p-4 w-full">
                                <div className="relative overflow-hidden rounded-[19px] mb-4">
                                    <video
                                        ref={(el) => {
                                            videoRefs.current[index] = el;
                                            return;
                                        }}

                                        className="w-full h-[400px] object-cover rounded-[19px]"
                                        src={videoSrc}
                                    />
                                </div>

                                {/* Custom Controls */}
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-center space-x-6 mb-2">
                                        {/* Backward Button */}
                                        <button
                                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                                            onClick={() => handleSeek(index, false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8 text-[#6278C7]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 9v6l-5-3 5-3z"
                                                />
                                            </svg>
                                        </button>

                                        {/* Play/Pause Button */}
                                        <button
                                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                                            onClick={() => togglePlay(index)}
                                        >
                                            {isPlaying === index ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-16 h-16 text-[#6278C7]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 9v6m4-6v6"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-16 h-16 text-[#6278C7]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                    />
                                                </svg>
                                            )}
                                        </button>

                                        {/* Forward Button */}
                                        <button
                                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                                            onClick={() => handleSeek(index, true)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8 text-[#6278C7]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 9v6l5-3-5-3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls for Larger Screens */}
                <button
                    className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
                    onClick={() => scrollCarousel("left")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#6278C7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
                    onClick={() => scrollCarousel("right")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#6278C7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
