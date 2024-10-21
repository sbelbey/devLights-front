"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CountdownTimerProps {
    hours: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
    hours,
}: CountdownTimerProps) => {
    const [timeRemaining, setTimeRemaining] = useState(hours * 3600);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number): string => {
        return time.toString().padStart(2, "0");
    };

    const hoursLeft = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="flex items-center font-montserrat-regular text-xs">
            <Image
                src="icons/clock_icon.svg"
                alt="clock icon"
                width={12}
                height={12}
                className="mr-2"
            />
            {formatTime(hoursLeft)}h {formatTime(minutes)}m{" "}
            {formatTime(seconds)}s remaining
        </div>
    );
};

export default CountdownTimer;
