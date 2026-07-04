import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Attraction {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  subcategory: string;
  description: string;
  location: string;
  rating: number;
  reviews: number;
  cuisine: string[];
  priceRange: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: "Misal Pav",
    imageUrl: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781147005/places/xjttuf3hdyhisp7vok8w.jpg",
    category: "Food",
    subcategory: "Local",
    description:
      "Nashik's iconic spicy Misal served with pav, farsan, onions, and lemon.",
    location: "Nashik",
    rating: 4.8,
    reviews: 1250,
    cuisine: ["Maharashtrian", "Street Food"],
    priceRange: "₹100-₹200",
  },
  {
    id: 2,
    name: "Sabudana Vada",
    imageUrl: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781147002/places/i80pncljtnfqubzhwbpe.jpg",
    category: "Food",
    subcategory: "Local",
    description:
      "Crispy sabudana fritters served with coconut and peanut chutney.",
    location: "Nashik",
    rating: 4.6,
    reviews: 890,
    cuisine: ["Maharashtrian"],
    priceRange: "₹50-₹150",
  },
  {
    id: 3,
    name: "Kanda Bhaji",
    imageUrl: "https://res.cloudinary.com/dq7re39ys/image/upload/v1781147006/places/hco8uun5csy912xooh6f.jpg",
    category: "Food",
    subcategory: "Local",
    description:
      "Crispy onion fritters best enjoyed during monsoon evenings.",
    location: "Nashik",
    rating: 4.5,
    reviews: 720,
    cuisine: ["Maharashtrian", "Street Food"],
    priceRange: "₹50-₹100",
  },
  {
    id: 4,
    name: "Pavwada",
    imageUrl: "https://res.cloudinary.com/dq7re39ys/image/upload/v1782015103/places/aumat6zhtz0i38lupgci.jpg",
    category: "Food",
    subcategory: "Local",
    description:
      "Authentic Maharashtrian Pavwada, a popular street food served with spicy chutney and traditional flavors.",
    location: "Nashik",
    rating: 4.7,
    reviews: 980,
    cuisine: ["Maharashtrian", "Street Food"],
    priceRange: "₹80-₹200",
  },
  {
    id: 5,
    name: "Kala Mutton Rassa",
    imageUrl: "https://res.cloudinary.com/dq7re39ys/image/upload/v1782015107/places/f0rtwfzjtl5l0b6g2ue0.jpg",
    category: "Food",
    subcategory: "Local",
    description:
      "Traditional Maharashtrian black mutton curry prepared with roasted spices, coconut, and a rich, spicy gravy. its bold flavor and authentic taste.",
    location: "Nashik",
    rating: 4.8,
    reviews: 1250,
    cuisine: ["Maharashtrian", "Non-Vegetarian"],
    priceRange: "₹300-₹700",
  },
  {
    id: 6,
    name: "Puran Poli",
    imageUrl: "https://res.cloudinary.com/dq7re39ys/image/upload/v1782015108/places/jqzptvsakezmngyvgr5w.jpg",
    category: "Food",
    subcategory: "Local",
    description:
      "Puran Poli is a traditional Maharashtrian sweet flatbread stuffed with a delicious mixture of jaggery and chana dal. It is especially popular during festivals and celebrations for its rich taste and cultural significance.",
    location: "Nashik",
    rating: 4.8,
    reviews: 1250,
    cuisine: ["Maharashtrian", "Sweet"],
    priceRange: "₹80-₹250",
  },
];

// Matches your Tailwind breakpoints: base=1 card, md=2, lg=3
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  if (w >= 1024) return 3; // lg
  if (w >= 768) return 2; // md
  return 1; // base/mobile
};

const TopAttraction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleCount();
      setVisibleCount(newVisible);
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, attractions.length - newVisible))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(attractions.length - visibleCount, 0);
  const slideWidthPercent = 100 / visibleCount;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Must-Try Food in Nashik
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Discover the best restaurants, cafes, and local flavors in Nashik
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                     h-12 w-12 rounded-full bg-white shadow-lg
                     flex items-center justify-center
                     hover:scale-110 transition-all
                     disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                     h-12 w-12 rounded-full bg-white shadow-lg
                     flex items-center justify-center
                     hover:scale-110 transition-all
                     disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
              }}
            >
              {attractions.map((place) => (
                <div
                  key={place.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-full">
                    <img
                      src={`${place.imageUrl}?w=600&auto=format&fit=crop`}
                      alt={place.name}
                      className="w-full h-52 object-cover"
                    />

                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                        {place.name}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {place.location}
                      </p>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {place.description}
                      </p>

                      <Link
                        to="/explore"
                        className="text-red-600 font-medium hover:underline text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  currentIndex === index ? "bg-red-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAttraction;