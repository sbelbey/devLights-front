import Image from "next/image";
import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#FD6E86] py-4 px-32 flex justify-between border-blue-600">
            <Image
                src={"icons/white_cart_icon.svg"}
                alt="White ecommerce icon"
                width={200}
                height={100}
                className=" border-blue-600"
            />
            <div className="font-montserrat-medium text-white text-lg flex flex-col items-start gap-2">
                <p>&quot;Copyright 2024&quot;</p>
                <p>Devlights</p>
            </div>
        </footer>
    );
}
