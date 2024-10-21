import { Roles } from "@/constants/Roles";
import { Response } from "./Response.interface";

export interface signin {
    email: string;
    password: string;
}

export interface Register {
    email: string;
    password: string;
}

export interface signinResponse extends Response {
    payload: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: Roles;
        cart: string;
    };
}

export interface RegisterResponse extends Response {
    payload: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: Roles;
        cart: string;
        avatarUrl: string;
    };
}
