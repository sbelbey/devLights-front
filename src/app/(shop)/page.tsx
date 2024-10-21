import CategoriesBar from "./Components/CategoriesBar";
import Slider from "./Components/Slider";
import SpecialOffers from "./Components/SpecialOffers";
import StaticProducts from "./Components/StaticProducts";
import TodayDeals from "./Components/TodayDeals";

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

const staticProducts = [
    {
        id: 1,
        image: "/images/woman_t_shirt.png",
        title: "Women Printed Kurta",
        description: "Neque porro quisquam est qui dolorem ipsum quia",
        price: 250,
        discount: 40,
        stars: 4.5,
        votes: 56890,
    },
    {
        id: 2,
        image: "/images/nike_jordan.png",
        title: "HRX by Hrithik Roshan",
        description: "Neque porro quisquam est qui dolorem ipsum quia",
        price: 250,
        discount: 50,
        stars: 3.2,
        votes: 344567,
    },
    {
        id: 3,
        image: "/images/hair_straightener.png",
        title: "Philips BHH880/10",
        description:
            "Hair Straightening Brush With Keratin Infused Bristles (Black).",
        price: 250,
        discount: 50,
        stars: 4.5,
        votes: 4,
    },
    {
        id: 4,
        image: "/images/men_watch.png",
        title: "TITAN Men Watch- 1806N",
        description:
            "This Titan watch in Black color is I wanted to buy for a long time",
        price: 250,
        discount: 50,
        stars: 5,
        votes: 15007,
    },
];

export default function mainPage({}) {
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
                <StaticProducts
                    productsQuantity={4}
                    products={staticProducts}
                />
            </section>
            <section className="flex flex-col items-center justify-center w-1/2">
                <SpecialOffers link="/category=special-offers" />
            </section>
            <section className="flex flex-col items-center justify-center w-4/5">
                {/* <ImageDivider
                    link="/category=image-divider"
                    imgPath="/images/brigth_shoes.png"
                    title="Flat and Heels"
                    subtitle="Stand a chance to get rewarded"
                    buttonText="Visit Now →"
                /> */}
            </section>
        </main>
    );
}
