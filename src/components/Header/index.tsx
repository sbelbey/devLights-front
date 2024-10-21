import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-gray-200 py-4 px-32 flex justify-between">
            <Link className="border-2 " href="/">
                <Image
                    src={"icons/blue_cart_icon.svg"}
                    alt="Blue Cart Icon"
                    width={200}
                    height={100}
                />
            </Link>
            <div className="flex-grow-[4] mx-4 text-center border-2">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-2/3 p-2 rounded "
                />
            </div>
            <div className="flex flex-nowrap justify-end  items-center border-2">
                <Link
                    className="mr-2 text-gray-800 flex flex-nowrap"
                    href={"/signin"}
                >
                    <Image
                        src={"icons/user_icon.svg"}
                        alt="User Icon"
                        width={24}
                        height={24}
                        className="mr-2"
                    />
                    <p className="mr-5">Ingresar</p>
                </Link>
                <Link className="mr-2" href={"/favorites"}>
                    <Image
                        src={"icons/heart_icon.svg"}
                        alt="Heart Icon"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href={"/cart"}>
                    <Image
                        src={"icons/cart_icon.svg"}
                        alt="Cart Icon"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </header>
    );
}
