import { OrderFilter } from "@/constants/OrderFilter";
import { Response } from "./Response.interface";

export interface ProductQuery {
    category: string;
    salersId: string;
    praiceRange: string;
    filterByPrice: OrderFilter;
    page: number;
    limit: number;
}

export interface ProductResponse extends Response {
    payload: {
        products: Product[];
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage: string | null;
        nextPage: string | null;
    };
}

export interface Product {
    id: string;
    title: string;
    description: string;
    code: string;
    price: number;
    stock: number;
    category: string;
    isNew: boolean;
    isAvailable: boolean;
    status: boolean;
    thumbnail: string[];
    createdBy: string;
    totalDocs: 17;
}
