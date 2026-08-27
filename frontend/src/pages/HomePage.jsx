import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/hoodies", name: "Hoodies", imageUrl: "/hoodies.jpg" },
  { href: "/dresses", name: "Dresses", imageUrl: "/dresses.jpg" },
  { href: "/watches", name: "Watches", imageUrl: "/watches.jpg" },
  { href: "/accessories", name: "Accessories", imageUrl: "/accessories.jpg" },
  { href: "/caps", name: "Caps", imageUrl: "/caps.jpg" },
  { href: "/shorts", name: "Shorts", imageUrl: "/shorts.jpg" },
  { href: "/pants", name: "Pants", imageUrl: "/pants.jpg" },
  { href: "/sweaters", name: "Sweaters", imageUrl: "/sweaters.jpg" },
  { href: "/skirts", name: "Skirts", imageUrl: "/skirts.jpg" },
  { href: "/sandals", name: "Sandals", imageUrl: "/sandals.jpg" },
  { href: "/socks", name: "Socks", imageUrl: "/socks.jpg" },
  { href: "/belts", name: "Belts", imageUrl: "/belts.jpg" },
  { href: "/wallets", name: "Wallets", imageUrl: "/wallets.jpg" },
  { href: "/underwear", name: "Underwear", imageUrl: "/underwear.jpg" },
  { href: "/activewear", name: "Activewear", imageUrl: "/activewear.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Shop by Category
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
