import React from "react";
import NavBarStatic from "./NavBar/NavBarStatic";
import NavBarDynamic from "./NavBar/NavBarDynamic";

export default async function Header() {
    return (
        <nav className="w-full bg-gray-200 py-4 px-32 flex justify-between ">
            <NavBarStatic />
            <NavBarDynamic />
        </nav>
    );
}
