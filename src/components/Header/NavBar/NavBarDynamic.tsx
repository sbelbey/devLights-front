"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function NavBarDynamic() {
    const { data: session } = useSession();

    return (
        <div className="flex flex-nowrap justify-end items-center flex-grow-[1] gap-2 w-1/3 border-2 border-green-500">
            {!session ? (
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
            ) : (
                <Link
                    className="mr-2 text-gray-800 flex flex-nowrap"
                    href="/profile"
                >
                    <p>{session.user?.name}</p>
                </Link>
            )}
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
            {session && (
                <Image
                    src={"icons/logout_icon.svg"}
                    alt="Logout Icon"
                    width={24}
                    height={24}
                    className="mx-2 hover:cursor-pointer"
                    onClick={() => {
                        signOut();
                    }}
                />
            )}
        </div>
    );
}
