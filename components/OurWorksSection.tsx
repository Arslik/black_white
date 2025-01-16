'use client'
import React, { useState, useRef, useEffect } from "react";

export default function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Reference for the video element
    const [isPlaying, setIsPlaying] = useState(false); // Play/Pause state
    const [progress, setProgress] = useState(0); // Video progress (percentage)
    const [duration, setDuration] = useState(0); // Video duration in seconds
    const [currentTime, setCurrentTime] = useState(0); // Current playback time

    // Format seconds into MM:SS
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
    };

    // Handle Play/Pause Toggle
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle Video Progress
    const handleProgress = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setCurrentTime(current);
            setProgress((current / total) * 100);
        }
    };

    // Handle Seek
    const handleSeek = (percentage: number) => {
        if (videoRef.current) {
            const newTime = (percentage / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(percentage);
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            {/* Title */}
            <h1 className="text-[#6278C7] text-4xl lg:text-5xl font-bold mb-8">
                НАШИ РАБОТЫ
            </h1>

            {/* Video Container */}
            <div className="bg-[#6278C7] rounded-[19px] p-4 w-full max-w-2xl">
                {/* Native Video Element */}
                <div className="relative overflow-hidden rounded-[19px] mb-4">
                    <video
                        ref={videoRef}
                        className="w-full h-[300px] object-cover"
                        src="/temp/video.mp4" // Replace with your video URL
                        onTimeUpdate={handleProgress}
                        onLoadedMetadata={() =>
                            setDuration(videoRef.current?.duration || 0)
                        }
                    />
                </div>

                {/* Custom Controls */}
                <div className="flex flex-col items-center">
                    {/* Playback Buttons */}
                    <div className="flex items-center justify-center space-x-6 mb-2">
                        {/* Backward Button */}
                        <button
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                            onClick={() => {
                                if (videoRef.current) {
                                    videoRef.current.currentTime = Math.max(
                                        0,
                                        videoRef.current.currentTime - 10
                                    );
                                }
                            }}
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
                            onClick={togglePlay}
                        >
                            {isPlaying ? (
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
                            onClick={() => {
                                if (videoRef.current) {
                                    videoRef.current.currentTime = Math.min(
                                        duration,
                                        videoRef.current.currentTime + 10
                                    );
                                }
                            }}
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

                    {/* Progress Bar */}
                    <div className="w-full flex items-center justify-between text-white text-xs px-4">
                        <span>{formatTime(currentTime)}</span>
                        <div
                            className="flex-grow mx-4 bg-white h-1 relative cursor-pointer"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const clickX = e.clientX - rect.left;
                                const percentage = (clickX / rect.width) * 100;
                                handleSeek(percentage);
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 h-1 bg-[#faf6f0]"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
