import React from "react";
import Link from "next/link";

interface ImageDividerProps {
    link: string;
    imgPath: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

export default function ImageDivider({
    link,
    imgPath,
    title,
    subtitle,
    buttonText,
}: ImageDividerProps) {
    return (
        <article className="flex bg-white w-full h-auto">
            <div
                className="w-full flex-shrink-0 flex flex-col items-end pl-12 py-12 "
                style={{
                    backgroundImage: `url(${imgPath})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="py-12 mr-40 rounded-lg text-black text-right ">
                    <h2 className="text-[44px] font-bold font-montserrat-black">
                        {title}
                    </h2>
                    <h3 className="text-xl mt-0 font-montserrat-regular">
                        {subtitle}
                    </h3>
                    <Link
                        href={link}
                        className="mt-4 inline-block text-white py-2 px-4 rounded-xl border-2  bg-[#F83758]  hover:bg-opacity-70 hover:text-black"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </article>
    );
}
