import React from "react";
import Image from "next/image";
import { FieldInterface } from "@/Interfaces/Fields.interface";
import PasswordField from "../PasswordField";

interface FieldProps {
    title: {
        text: string;
        className: string;
    };
    subtitle?: {
        text: string;
        className: string;
    };
    fields: FieldInterface[];
}

const Fields: React.FC<FieldProps> = ({
    title,
    subtitle,
    fields,
}: FieldProps) => {
    return (
        <>
            <h1 className={title.className}>{title.text}</h1>
            {subtitle && (
                <h2 className={subtitle.className}>{subtitle.text}</h2>
            )}
            {fields.map((field, index) => (
                <div className="mt-6 w-full" key={index}>
                    {field.label && (
                        <label
                            htmlFor={field.props.name}
                            key={`${index}-${field.label}`}
                            className="w-full flex flex-row items-center text-black m-0 p-0 mb-1"
                        >
                            {field.label}
                        </label>
                    )}
                    <label
                        htmlFor={field.props.name}
                        key={index}
                        id={`${field.props.name}-${index}`}
                        className={`flex items-center w-full border-2 border-gray-300 rounded-lg  focus-within:outline-2 focus-within:outline-blue-500 ${field.props.className}`}
                    >
                        {field.iconPath && (
                            <Image
                                src={field.iconPath}
                                width={20}
                                height={20}
                                className="h-4 w-4 mx-3"
                                alt={`${field.props.name}_icon`}
                            />
                        )}

                        {field.props.type === "password" ? (
                            <PasswordField fieldProps={field.props} />
                        ) : (
                            <>
                                {field.props.type === "select" ? (
                                    <select
                                        id={field.props.name}
                                        className={`${field.props.className} w-full p-3 text-gray-400 bg-white border-none focus:outline-none focus:ring-0`}
                                    >
                                        {field.props.options?.map(
                                            (option, index) => (
                                                <option
                                                    key={index}
                                                    value={option}
                                                    className="bg-white text-black"
                                                >
                                                    {option}
                                                </option>
                                            )
                                        )}
                                    </select>
                                ) : (
                                    <input
                                        {...field.props}
                                        id={field.props.name}
                                        className={`w-full p-3 bg-transparent text-black focus:outline-none`}
                                    />
                                )}
                            </>
                        )}
                    </label>
                </div>
            ))}
        </>
    );
};

export default Fields;
