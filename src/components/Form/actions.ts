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
import { signin, Register } from "@/Interfaces/user.interface";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
            const loginData: signin = {
                email: formData.email,
                password: formData.password,
            };
            try {
                const result = await UserServices.signin(loginData);
                console.log(result.payload);
                router.push("/");
            } catch (error) {
                console.error(error);
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
