import { Product } from "@/Interfaces/Product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
}: ProductCardProps) => {
    const discount = Math.floor(Math.random() * (35 - 3 + 1)) + 3;
    const stars = Math.floor(Math.random() * 11) / 2;
    const votes = Math.floor(Math.random() * 100000);
    return (
        <Link
            href={`/product/${product.id}`}
            className="hover:shadow-lg w-full"
        >
            <article className="flex flex-col items-start justify-between rounded-lg hover:drop-shadow-md bg-white gap-2 pb-2 max-h-100">
                <Image
                    src={product.thumbnail[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full rounded-t-lg"
                />
                {/* <ImageCarruosel images={product.images} /> */}
                <div className="flex flex-nowrap flex-col items-start justify-between w-full px-3 gap-2">
                    <h2 className="font-montserrat-medium text-base">
                        {product.title}
                    </h2>
                    <h2 className="font-montserrat-regular text-base">
                        {product.description.length > 60
                            ? `${product.description.substring(0, 45)}...`
                            : product.description}
                    </h2>
                    <h2 className="font-montserrat-medium text-lg">
                        $
                        {discount > 0
                            ? `${(product.price * (discount / 100)).toFixed(2)}`
                            : product.price.toFixed(2)}
                    </h2>
                    {discount > 0 && (
                        <div className="flex flex-nowrap items-center justify-between">
                            <p className="text-gray-600 line-through font-montserrat-light text-xs mr-4">
                                {`$${product.price}      `}
                            </p>
                            <p className="text-red-600 font-montserrat-light text-xs">
                                {discount}% OFF
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-1 p-2">
                    {Array.from({ length: 5 }, (_, index) => {
                        if (index < Math.floor(stars)) {
                            return (
                                <Image
                                    key={index}
                                    src="/icons/gold-star-icon.svg"
                                    alt="Gold Star"
                                    width={24}
                                    height={24}
                                />
                            );
                        } else if (index < stars) {
                            return (
                                <Image
                                    key={index}
                                    src="/icons/half-star-icon.svg"
                                    alt="Half Star"
                                    width={24}
                                    height={24}
                                />
                            );
                        } else {
                            return (
                                <Image
                                    key={index}
                                    src="/icons/unfill-star-icon.svg"
                                    alt="Unfilled Star"
                                    width={24}
                                    height={24}
                                />
                            );
                        }
                    })}
                    <span className="ml-2 text-sm text-gray-600">{votes}</span>
                </div>
            </article>
        </Link>
    );
};

export default ProductCard;
