import React from "react";
import ProductCard from "../ProductCard";
import { Product } from "@/Interfaces/Product.interface";

interface StaticProductsProps {
    productsQuantity: number;
    products: Product[];
}

const StaticProducts: React.FC<StaticProductsProps> = ({
    productsQuantity,
    products,
}: StaticProductsProps) => {
    return (
        <section className="flex flex-nowrap items-center justify-between w-full gap-4">
            {productsQuantity > 0 &&
                products.map((product) => {
                    return <ProductCard product={product} key={product.id} />;
                })}
        </section>
    );
};

export default StaticProducts;
