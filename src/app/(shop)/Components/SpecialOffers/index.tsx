import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SpecialOffersProps {
    link: string;
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({
    link,
}: SpecialOffersProps) => {
    return (
        <Link
            className="flex flex-nowrap shadow-lg shadow-gray-300 justify-center items-center w-full gap-14 py-3 rounded-md"
            href={link}
        >
            <Image
                src={"/icons/supersale_icon.svg"}
                alt="Special Offers"
                width={65}
                height={65}
            />
            <div className="flex flex-col items-start justify-between px-3 gap-1">
                <h2 className="font-montserrat-medium text-lg">
                    Special Offers
                </h2>
                <h2 className="font-montserrat-regular text-base">
                    We make sure you get the offer you need at best prices
                </h2>
            </div>
        </Link>
    );
};

export default SpecialOffers;
