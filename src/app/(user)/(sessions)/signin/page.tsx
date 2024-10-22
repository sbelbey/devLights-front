import React from "react";
import Form from "@/components/Form";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const formConstructor = {
    title: { text: "Login", className: "text-2xl text-black font-bold m-4" },
    subtitle: {
        text: "Access to our dasboard",
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
                minLength: 8,
            },
        },
    ],
};

export default async function Page() {
    const session = await auth();
    if (session) {
        redirect("/profile");
    }

    return (
        <section className="w-full h-full bg-gray-100 flex flex-wrap justify-center content-center ">
            <article className="w-4/5 min-h-1/2 h-auto bg-white shadow-md border-black rounded-lg p-8">
                <Form formConstructor={formConstructor} />
                <p className="w-full text-center text-lg text-black font-light mt-2 mb-8 ">
                    Don&apos;t have an account yet?{" "}
                    <Link href={"/register"} className="font-bold ">
                        Register
                    </Link>
                </p>
            </article>
        </section>
    );
}
