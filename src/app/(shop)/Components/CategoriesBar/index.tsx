import Link from "next/link";
import React from "react";

interface CategoriesBarProps {}

const categories = ["Beauty", "Fashion", "Kids", "Mens", "Womens", "Gifts"];

const CategoriesBar: React.FC<CategoriesBarProps> = ({}) => {
    return (
        <nav className="w-full bg-[#FD6E86]">
            <ul className="flex justify-center">
                {categories.map((category) => (
                    <li
                        key={category}
                        className="px-4 py-2 text-white font-montserrat-regular hover:cursor-pointer hover:bg-white hover:bg-opacity-20"
                    >
                        <Link href={`/?category=${category.toLowerCase()}`}>
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoriesBar;
