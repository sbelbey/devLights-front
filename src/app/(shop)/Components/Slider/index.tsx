"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Slide {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    button: string;
    buttonLink: string;
}

interface SliderProps {
    slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-full overflow-hidden ">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 flex flex-col items-start pl-12 py-12 justify-center"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="p-12 rounded-lg text-white text-left ">
                            <h2 className="text-[60px] font-bold font-montserrat-black">
                                {slide.title}
                            </h2>
                            <h3 className="text-xl mt-0 font-montserrat-regular">
                                {slide.subtitle}
                            </h3>
                            <p className="mt-2">{slide.description}</p>
                            <Link
                                href={slide.buttonLink}
                                className="mt-4 inline-block text-white py-2 px-4 rounded-xl border-2 border-white hover:bg-white hover:bg-opacity-70 hover:text-black"
                            >
                                {slide.button}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-black hover:text-white hover:bg-opacity-70 shadow-lg flex items-center justify-center aspect-square"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-black hover:text-white hover:bg-opacity-70 shadow-lg flex items-center justify-center aspect-square"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
