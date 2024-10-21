import React from "react";
import ProductCard from "../ProductCard";

interface StaticProductsProps {
    productsQuantity: number;
    products: {
        id: number;
        image: string;
        title: string;
        description: string;
        price: number;
        discount: number;
        stars: number;
        votes: number;
    }[];
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
