"use client";
import React from "react";
import Image from "next/image";

interface AvatarProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
    editable?: boolean;
    onEdit?: () => void;
}

export default function Avatar({
    src,
    alt,
    className,
    width,
    height,
    onClick,
    editable,
    onEdit,
}: AvatarProps) {
    return (
        <div className={`relative ${className}`} onClick={onClick}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="object-cover rounded-full"
            />
            {editable && (
                <>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="avatar-upload"
                    />
                    <label
                        htmlFor="avatar-upload"
                        className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 border-white border-2 rounded-full cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src="/icons/pen_icon.svg"
                            alt="edit"
                            width={15}
                            height={15}
                            className="stroke-white fill-white"
                        />
                    </label>
                </>
            )}
        </div>
    );
}
