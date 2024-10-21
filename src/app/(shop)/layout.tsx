import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ShopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <div className="flex flex-col flex-grow">
                <Header />
                {children}
            </div>

            <Footer />
        </div>
    );
}
