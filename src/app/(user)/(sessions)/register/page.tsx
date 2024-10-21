import React from "react";
import Form from "@/components/Form";
import Link from "next/link";

const formConstructor = {
    title: {
        text: "Create an account",
        className: "text-2xl text-black font-bold m-4",
    },
    subtitle: {
        text: "Access to our dashboard",
        className: "text-sm text-black font-light mb-3",
    },
    fields: [
        {
            iconPath: "icons/user_icon.svg",
            props: {
                type: "text",
                name: "email",
                placeholder: "Email",
                className: "bg-transparent w-full",
                required: true,
            },
        },
        {
            iconPath: "icons/lock_icon.svg",
            props: {
                type: "password",
                name: "password",
                placeholder: "Password",
                className: "bg-transparent w-full",
                required: true,
                pattern:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z\\d!@#$%^&*]{8,}$",
            },
        },
        {
            iconPath: "icons/lock_icon.svg",
            props: {
                type: "password",
                name: "confirmPassword",
                placeholder: "Confirm Password",
                className: "bg-transparent w-full",
                required: true,
                pattern:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z\\d!@#$%^&*]{8,}$",
            },
        },
    ],
};

export default function Page() {
    return (
        <section className="w-full h-full bg-gray-100 flex flex-wrap justify-center content-center ">
            <article className="w-4/5 min-h-1/2 h-auto bg-white shadow-md border-black rounded-lg p-8">
                <Form formConstructor={formConstructor} />
                <p className="w-full text-center text-lg text-black font-light mt-2 mb-8">
                    Do you have an account?{" "}
                    <Link href={"/signin"} className="font-bold">
                        Login
                    </Link>
                </p>
            </article>
        </section>
    );
}
