import axios, { AxiosResponse } from "axios";
import { ProductQuery, ProductResponse } from "@/Interfaces/Product.interface";

export default class ProductServices {
    static backUrl: string =
        process.env.API_HOST ?? "http://localhost:8081/api/v1";
    static path: string = "/products";

    static async getProducts(
        query?: Partial<ProductQuery>
    ): Promise<ProductResponse> {
        try {
            const queryString = query
                ? `?${new URLSearchParams(
                      query as Record<string, string>
                  ).toString()}`
                : "";

            const loginPath = `${this.backUrl}${this.path}${queryString}`;
            const result: AxiosResponse = await axios.get(loginPath);

            if (result.status !== 200 || !result.data.success) {
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
