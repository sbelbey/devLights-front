"use client";
import { Product } from "@/Interfaces/Product.interface";
import React, { useState, useRef, useEffect } from "react";
import ProductCard from "../ProductCard";
import Image from "next/image";

interface ProductsSliderProps {
    products: Product[];
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsToShow = 4;
    const totalProducts = products.length;
    const sliderRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < totalProducts - productsToShow ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : totalProducts - productsToShow
        );
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${
                (100 / productsToShow) * currentIndex
            }%)`;
        }
    }, [currentIndex, productsToShow]);

    return (
        <div className="relative w-full">
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 z-10"
            >
                <Image
                    src={"icons/chevron-left-icon.svg"}
                    width={24}
                    height={24}
                    alt="chevron-left"
                />
            </button>

            <div className="overflow-hidden">
                <div
                    ref={sliderRef}
                    className={`flex transition-transform duration-500 ease-in-out `}
                >
                    {products.map((product, index) => (
                        <div
                            key={product.id + index}
                            className={`w-1/4 flex-shrink-0 px-2`}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 z-10"
            >
                <Image
                    src={"icons/chevron-right-icon.svg"}
                    width={24}
                    height={24}
                    alt="chevron-left"
                />
            </button>
        </div>
    );
};

export default ProductsSlider;
