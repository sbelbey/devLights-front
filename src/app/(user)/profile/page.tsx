"use client";
import React from "react";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import FormProfile from "@/components/ProfileForm";
import ButtonComponent from "@/components/Button";

interface profileProps {
    user: {
        name: string;
        email: string;
        image: string;
    };
}

const PersonalDatailsForm = {
    title: {
        text: "Personal Details",
        className: "text-xl text-black font-bold mt-4 mb-0 text-left w-full",
    },

    fields: [
        {
            iconPath: "icons/user_icon.svg",
            label: "Email Address",
            props: {
                type: "email",
                name: "email",
                placeholder: "Email",
                required: true,
            },
        },
        {
            iconPath: "icons/lock_icon.svg",
            label: "Password",
            props: {
                type: "password",
                name: "password",
                placeholder: "Password",
            },
        },
    ],
};

const BusinessDetailsForm = {
    title: {
        text: "Business Address Details",
        className: "text-xl text-black font-bold mt-4 mb-0 text-left w-full",
    },
    fields: [
        {
            label: "Business Address",
            props: {
                type: "text",
                name: "business_address",
                placeholder: "Business Address",
            },
        },
        {
            label: "City",
            props: {
                type: "text",
                name: "business_city",
                placeholder: "Business City",
            },
        },
        {
            label: "Business State",
            props: {
                type: "select",
                name: "business_state",
                placeholder: "Business State",
                options: [
                    "Buenos Aires",
                    "Catamarca",
                    "Chaco",
                    "Ciudad Autónoma de Buenos Aires",
                    "Chubut",
                    "Córdoba",
                    "Corrientes",
                    "Entre Ríos",
                    "Formosa",
                    "Jujuy",
                    "La Pampa",
                    "La Rioja",
                    "Mendoza",
                    "Misiones",
                    "Neuquén",
                    "Río Negro",
                    "Salta",
                    "San Juan",
                    "San Luis",
                    "Santa Cruz",
                    "Santa Fe",
                    "Santiago del Estero",
                    "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
                    "Tucumán",
                ],
            },
        },
        {
            label: "Country",
            props: {
                type: "text",
                name: "business_country",
                placeholder: "Business Country",
            },
        },
    ],
};

const cardAccountDatailsForm = {
    title: {
        text: "Card Account Details",
        className: "text-xl text-black font-bold mt-4 mb-0 text-left w-full",
    },
    fields: [
        {
            label: "Bank Account Number",
            props: {
                type: "text",
                name: "bank_account_number",
                placeholder: "Bank Account Number",
            },
        },
        {
            label: "Account Holder's Name",
            props: {
                type: "text",
                name: "account_holder_name",
                placeholder: "Account Holder's name",
            },
        },
        {
            label: "CVC Code",
            props: {
                type: "text",
                name: "cvc_code",
                placeholder: "CVC Code",
            },
        },
    ],
};

export default function Page({ user }: profileProps) {
    return (
        <section className="min-w-full h-auto bg-gray-100 flex flex-wrap justify-center content-center py-4">
            <article className="w-1/3 min-h-1/2 h-auto bg-white shadow-md rounded-lg flex flex-wrap justify-center content-center py-6 px-10 gap-4">
                <header className="w-full text-center text-2xl text-black font-bold my-4 flex flex-nowrap items-center justify-between ">
                    <Link
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            history.back();
                        }}
                        className=" h-full text-start text-blue-600 font-light hover:text-blue-800 text-base align-baseline"
                    >
                        {" "}
                        {"< Volver"}
                    </Link>
                    <h4 className="absolute left-1/2 transform -translate-x-1/2 text-black text-xl">
                        Checkout
                    </h4>
                </header>
                <form className="w-full flex flex-wrap justify-center items-center content-center py-6 gap-4">
                    <Avatar
                        src={
                            user && user.image
                                ? user.image
                                : "/icons/user_icon.svg"
                        }
                        alt="user_avatar"
                        className="rounded-full w-24 h-24 shadow-2xl p-4"
                        editable={true}
                        onEdit={() => {
                            console.log("Edit avatar");
                        }}
                        width={100}
                        height={100}
                    />

                    <FormProfile
                        PersonalDatails={PersonalDatailsForm}
                        BusinessDetails={BusinessDetailsForm}
                        CardAccountDatails={cardAccountDatailsForm}
                    />
                    <ButtonComponent type="confirm" text="Save" />
                </form>
            </article>
        </section>
    );
}
