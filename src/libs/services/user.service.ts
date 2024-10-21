import axios, { AxiosResponse } from "axios";
import {
    signin,
    signinResponse,
    Register,
    RegisterResponse,
} from "@/Interfaces/user.interface";

export default class UserServices {
    static backUrl: string =
        process.env.BACK_URL ?? "http://localhost:8081/api/v1";
    static path: string = "/users";

    static async signin(loginData: signin): Promise<signinResponse> {
        try {
            const loginPath = `${this.backUrl}${this.path}/login`;
            const result: AxiosResponse = await axios.post(
                loginPath,
                loginData
            );

            if (result.status !== 202 || !result.data.success) {
                throw new Error(result.data.payload.description);
            }

            return result.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("An unexpected error occurred");
            }
        }
    }

    static async register(registerData: Register): Promise<RegisterResponse> {
        try {
            const registerPath = `${this.backUrl}${this.path}`;
            const result: AxiosResponse = await axios.post(
                registerPath,
                registerData
            );
            if (result.status !== 201 || !result.data.success) {
                throw new Error(result.data.payload.description);
            }
            return result.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("An unexpected error occurred");
            }
        }
    }
}
