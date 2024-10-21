import Link from "next/link";
import React from "react";
import CountdownTimer from "../CountdownTimer";

interface TodayDealsProps {
    link: string;
}

const TodayDeals: React.FC<TodayDealsProps> = ({ link }: TodayDealsProps) => {
    return (
        <section className="flex justify-between px-12 py-6 bg-[#4392F9] w-full rounded-md text-white">
            <div>
                <h5 className="font-montserrat-medium text-base">
                    Deal of the Day
                </h5>
                <CountdownTimer hours={22} />
            </div>
            <Link
                href={link}
                className="flex items-center justify-center text-white px-4 rounded-xl border-2 border-white hover:bg-white hover:bg-opacity-70 hover:text-black font-montserrat-semi-bold"
            >
                View All →
            </Link>
        </section>
    );
};

export default TodayDeals;
