import {
    ChangeEvent,
    Dispatch,
    FocusEvent,
    FormEvent,
    SetStateAction,
} from "react";
import validateFormData from "@/libs/validatFormData";
import schemas from "./schemas";
import UserServices from "@/libs/services/user.service";
import { Register } from "@/Interfaces/user.interface";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { signIn } from "next-auth/react";

export function handleChange(
    e: ChangeEvent<HTMLInputElement>,
    setFormData: Dispatch<SetStateAction<{ [key: string]: string }>>
) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
}

export function handleBlur(
    event: FocusEvent<HTMLInputElement>,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>,
    formData: { [key: string]: string },
    pageName: string
) {
    const { name } = event.target;
    const schemaKey = `${pageName}Schema` as keyof typeof schemas;
    const schema = schemas[schemaKey];
    const { valid, errors } = validateFormData(formData, schema);
    if (valid) {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errors[name],
        }));
    }
}

export async function handleSubmit(
    event: FormEvent,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>,
    formData: { [key: string]: string },
    pageName: string,
    router: AppRouterInstance
) {
    event.preventDefault();
    const schemaKey = `${pageName}Schema` as keyof typeof schemas;
    const schema = schemas[schemaKey];
    const { valid, errors } = validateFormData(formData, schema);
    if (valid) {
        setErrors({});
        if (pageName === "signin") {
            const loginData = {
                email: formData.email,
                password: formData.password,
                redirect: false,
            };
            const result = await signIn("credentials", loginData);
            if (result?.error) {
                setErrors({ general: "Invalid credentials" });
            } else {
                router.push("/");
            }
        } else if (pageName === "register") {
            const registerData: Register = {
                email: formData.email,
                password: formData.password,
            };
            try {
                const result = await UserServices.register(registerData);
                console.log(result.payload);
            } catch (error) {
                console.error(error);
            }
        }
    } else {
        setErrors(errors);
    }
}
