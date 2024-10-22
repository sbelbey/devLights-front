"use server";

import { signOut } from "@/auth";
import { signin, signinResponse } from "@/Interfaces/user.interface";
import UserServices from "@/libs/services/user.service";

export async function login(credentials: signin): Promise<signinResponse> {
    try {
        const result = await UserServices.signin(credentials);

        return result;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export async function logOut() {
    return signOut();
}

export async function getUserByEmail(email: string): Promise<signinResponse> {
    try {
        const result = await UserServices.getUserByEmail(email);
        return result;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}
