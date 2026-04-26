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
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
    description: "India's most famous winery with tours & tastings.",
    location: "Nashik",
  },
  {
    id: 2,
    name: "Trimbakeshwar Temple",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
    description: "One of the 12 Jyotirlingas dedicated to Lord Shiva.",
    location: "Trimbak",
  },
  {
    id: 3,
    name: "Pandavleni Caves",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "Ancient Buddhist caves with scenic hill views.",
    location: "Nashik",
  },
];

const TopAttraction = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Top Attractions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Essential information to plan your perfect Nashik trip
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((place) => (
            <div
              key={place.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={`${place.image}?w=600&auto=format&fit=crop`}
                alt={place.name}
                className="w-full h-48 object-cover"
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopAttraction;
