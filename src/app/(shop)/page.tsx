import CategoriesBar from "./Components/CategoriesBar";
import ImageDivider from "./Components/ImageDivider";
import ProductsSlider from "./Components/ProductsSlider";
import Slider from "./Components/Slider";
import SpecialOffers from "./Components/SpecialOffers";
import StaticProducts from "./Components/StaticProducts";
import TodayDeals from "./Components/TodayDeals";
import getAllProducts from "./libs/products";

const slidesHeader = [
    {
        image: "images/women_bag.png",
        title: "50-40% OFF",
        subtitle: "Now in (product)",
        description: "All colours",
        button: "Shop now →",
        buttonLink: "/category=summer-sale",
    },
    {
        image: "images/women_bag.png",
        title: "New Arrivals",
        subtitle: "Latest Trends",
        description: "Check out the newest styles",
        button: "Discover →",
        buttonLink: "/category=new-arrivals",
    },
    {
        image: "images/women_bag.png",
        title: "Best Sellers",
        subtitle: "Top Picks",
        description: "Most popular items",
        button: "Shop Best Sellers →",
        buttonLink: "/category=best-sellers",
    },
];

export default async function mainPage({}) {
    let products;
    try {
        products = await getAllProducts({});
    } catch (error) {
        console.log("🚀 ~ error:", error);
    }

    return (
        <main className="flex flex-col justify-center items-center gap-14 content-between mb-8">
            <header>
                <CategoriesBar />
                <Slider slides={slidesHeader} />
            </header>
            <section className="flex flex-col items-center w-1/2 justify-center">
                <TodayDeals link="/category=today-deals" />
            </section>
            <section className="flex flex-col items-center justify-center  w-4/5">
                {products && (
                    <StaticProducts
                        productsQuantity={4}
                        products={products.payload.products.slice(0, 4)}
                    />
                )}
            </section>
            <section className="flex flex-col items-center justify-center w-1/2">
                <SpecialOffers link="/category=special-offers" />
            </section>
            <section className="flex flex-col items-center justify-center w-4/5">
                <ImageDivider
                    link="/category=image-divider"
                    imgPath="/images/brigth_shoes.png"
                    title="Flat and Heels"
                    subtitle="Stand a chance to get rewarded"
                    buttonText="Visit Now →"
                />
            </section>
            <section className="flex items-center justify-center  w-4/5">
                {products && (
                    <ProductsSlider
                        products={products.payload.products.slice(5, 15)}
                    />
                )}
            </section>
        </main>
    );
}
