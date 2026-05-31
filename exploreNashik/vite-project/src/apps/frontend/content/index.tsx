
import { useState } from "react";
import { Link } from "react-router-dom";

interface Attraction {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: "Sula Vineyards",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
    description: "India's most famous winery with tours & tastings.",
    location: "Nashik",
  },
  {
    id: 2,
    name: "Trimbakeshwar Temple",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
    description: "One of the 12 Jyotirlingas dedicated to Lord Shiva.",
    location: "Trimbak",
  },
  {
    id: 3,
    name: "Pandavleni Caves",
    image:
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "Ancient Buddhist caves with scenic hill views.",
    location: "Nashik",
  },
  {
    id: 4,
    name: "Anjneri Hills",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Popular trekking destination believed to be Hanuman's birthplace.",
    location: "Anjneri",
  },
  {
    id: 5,
    name: "Gangapur Dam",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description:
      "Beautiful reservoir offering peaceful sunset views.",
    location: "Nashik",
  },
];

const TopAttraction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = attractions.length - 3;

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
            Top Attractions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Essential information to plan your perfect Nashik trip
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
                transform: `translateX(-${currentIndex * 33.3333}%)`,
              }}
            >
              {attractions.map((place) => (
                <div
                  key={place.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-full">
                    <img
                      src={`${place.image}?w=600&auto=format&fit=crop`}
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
                  currentIndex === index
                    ? "bg-red-600 w-6"
                    : "bg-gray-300"
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