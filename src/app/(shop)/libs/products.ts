"use server";
import { ProductQuery } from "@/Interfaces/Product.interface";
import ProductServices from "@/libs/services/product.service";

export default async function getAllProducts(query: Partial<ProductQuery>) {
    try {
        const defaultQuery = {
            page: 1,
            limit: 15,
            ...query,
        };
        const products = await ProductServices.getProducts(defaultQuery);
        return products;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}
