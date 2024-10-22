import Image from "next/image";
import Link from "next/link";

export default function SessionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-nowrap max-w-screen w-screen h-screen">
            <section className="w-1/2 h-full bg-[#D9D9D9] flex justify-center content-center">
                <Link href="/" className="self-center h-[200px]">
                    <Image
                        src={"icons/blue_cart_vertical_icon.svg"}
                        alt="blue_cart_vertical_icon"
                        width={150}
                        height={200}
                    />
                </Link>
            </section>
            <section className="w-1/2 h-full">{children}</section>
        </main>
    );
}
