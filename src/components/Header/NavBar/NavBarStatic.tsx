import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBarStatic() {
    return (
        <div className="flex flex-grow-[2] w-full">
            <Link className=" " href="/">
                <Image
                    src={"icons/blue_cart_icon.svg"}
                    alt="Blue Cart Icon"
                    width={200}
                    height={100}
                />
            </Link>
            <div className="flex-grow-[4] mx-4 text-center ">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-2/3 p-2 rounded "
                />
            </div>
        </div>
    );
}
