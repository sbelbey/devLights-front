import React from "react";

interface ButtonProps {
    type: "submit" | "cancel" | "forgot";
    text: string;
}

const btnStyle = {
    submit: " flex items-center justify-center w-full rounded-lg border text-white p-4 bg-blue-500 border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-3 px-4 rounded",
    cancel: "flex items-center justify-center w-full rounded-lg border text-white p-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded",
    forgot: "w-full text-red-500 text-end font-light mt-2 mb-6 border-none",
};

const ButtonComponent = ({ type, text }: ButtonProps) => {
    return (
        <button
            className={`${btnStyle[type]}`}
            type={type === "submit" ? "submit" : "button"}
        >
            {text}
        </button>
    );
};

export default ButtonComponent;
