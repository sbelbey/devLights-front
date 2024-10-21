import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
    product: {
        id: number;
        image: string;
        title: string;
        description: string;
        price: number;
        discount: number;
        stars: number;
        votes: number;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
}: ProductCardProps) => {
    return (
        <Link
            href={`/product/${product.id}`}
            className="hover:shadow-lg w-full"
        >
            <article className="flex flex-col items-start justify-between rounded-sm hover:drop-shadow-md bg-white gap-2 py-2">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full rounded-t-sm"
                />
                <div className="flex flex-nowrap flex-col items-start justify-between w-full px-3 gap-2">
                    <h2 className="font-montserrat-medium text-lg">
                        {product.title}
                    </h2>
                    <h2 className="font-montserrat-regular text-base">
                        {product.description.length > 60
                            ? `${product.description.substring(0, 57)}...`
                            : product.description}
                    </h2>
                    <h2 className="font-montserrat-medium text-lg">
                        $
                        {product.discount > 0
                            ? `${product.price * (product.discount / 100)}`
                            : product.price}
                    </h2>
                    {product.discount > 0 && (
                        <div className="flex flex-nowrap items-center justify-between">
                            <p className="text-gray-600 line-through font-montserrat-light text-xs mr-4">
                                {`$${product.price}      `}
                            </p>
                            <p className="text-red-600 font-montserrat-light text-xs">
                                {product.discount}% OFF
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => {
                        if (index < Math.floor(product.stars)) {
                            return (
                                <Image
                                    key={index}
                                    src="/icons/gold-star-icon.svg"
                                    alt="Gold Star"
                                    width={24}
                                    height={24}
                                />
                            );
                        } else if (index < product.stars) {
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
                    <span className="ml-2 text-sm text-gray-600">
                        {product.votes}
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default ProductCard;
