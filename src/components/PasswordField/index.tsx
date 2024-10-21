"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PasswordFieldProps {
    fieldProps: {
        type: string;
        name: string;
        className?: string;
        placeholder: string;
        required?: boolean;
    };
}

const PasswordField: React.FC<PasswordFieldProps> = ({
    fieldProps,
}: PasswordFieldProps) => {
    const [showPass, setShowPass] = useState<boolean>(false);

    const showPassword = () => {
        setShowPass(!showPass);
    };
    return (
        <>
            <input
                {...fieldProps}
                type={
                    fieldProps.type === "password"
                        ? showPass
                            ? "text"
                            : "password"
                        : fieldProps.type
                }
                id={fieldProps.name}
                className="w-full p-3 bg-transparent text-black focus:outline-none"
            />

            <label htmlFor="eye_icon" className="flex items-center">
                <Image
                    src={"/icons/eye_icon.svg"}
                    width={20}
                    height={20}
                    className="h-4 w-4 mx-6 cursor-pointer"
                    alt={`${fieldProps.name}_icon`}
                />
            </label>
            <input
                type="checkbox"
                id="eye_icon"
                onClick={showPassword}
                className="hidden"
            />
        </>
    );
};

export default PasswordField;
