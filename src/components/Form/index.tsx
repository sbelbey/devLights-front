"use client";
import React, { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import ButtonComponent from "../Button";
import FormProps from "@/Interfaces/FromProps.Interface";
import { handleChange, handleBlur, handleSubmit } from "./actions";

const Form: React.FC<FormProps> = ({ formConstructor }) => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigationRouter = useRouter();

    const router = usePathname();
    const pageName = router.split("/")[1];

    const showPassword = () => {
        setShowPass(!showPass);
    };

    return (
        <div className="flex flex-col justify-center items-center p-4">
            {formConstructor && (
                <>
                    <h1 className={formConstructor.title.className}>
                        {formConstructor.title.text}
                    </h1>
                    {formConstructor.subtitle && (
                        <h2 className={formConstructor.subtitle.className}>
                            {formConstructor.subtitle.text}
                        </h2>
                    )}

                    <form
                        className="flex flex-col justify-center items-center w-full"
                        onSubmit={(event: FormEvent) =>
                            handleSubmit(
                                event,
                                setErrors,
                                formData,
                                pageName,
                                navigationRouter
                            )
                        }
                    >
                        {formConstructor.fields.map((field, index) => (
                            <div key={index} className="w-full">
                                <label
                                    htmlFor={field.props.name}
                                    className={`flex items-center w-full bg-gray-100 border-2 rounded-lg m-2 focus-within:outline-2 focus-within:outline-blue-500 ${
                                        errors[field.props.name]
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
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
                                    <input
                                        {...field.props}
                                        onChange={(
                                            event: ChangeEvent<HTMLInputElement>
                                        ) => handleChange(event, setFormData)}
                                        onBlur={(
                                            event: FocusEvent<HTMLInputElement>
                                        ) =>
                                            handleBlur(
                                                event,
                                                setErrors,
                                                formData,
                                                pageName
                                            )
                                        }
                                        type={
                                            field.props.type === "password"
                                                ? showPass
                                                    ? "text"
                                                    : "password"
                                                : field.props.type
                                        }
                                        id={field.props.name}
                                        className="w-full p-3 bg-transparent text-black focus:outline-none peer"
                                    />
                                    {field.props.type === "password" && (
                                        <>
                                            <label
                                                htmlFor="eye_icon"
                                                className="flex items-center"
                                            >
                                                <Image
                                                    src={"/icons/eye_icon.svg"}
                                                    width={20}
                                                    height={20}
                                                    className="h-4 w-4 mx-6 cursor-pointer"
                                                    alt={`${field.props.name}_icon`}
                                                />
                                            </label>
                                            <input
                                                type="checkbox"
                                                id="eye_icon"
                                                onClick={showPassword}
                                                className="hidden"
                                            />
                                        </>
                                    )}
                                </label>
                                {errors[field.props.name] && (
                                    <span className="text-red-500 text-start w-full m-2">
                                        {errors[field.props.name]}
                                    </span>
                                )}
                            </div>
                        ))}
                        <ButtonComponent
                            type="forgot"
                            text="Forgot password?"
                        />
                        <ButtonComponent type="submit" text="Login" />
                        {errors.general && (
                            <div className="text-red-500 text-center w-full m-2">
                                {errors.general}
                            </div>
                        )}
                    </form>
                </>
            )}
        </div>
    );
};

export default Form;
