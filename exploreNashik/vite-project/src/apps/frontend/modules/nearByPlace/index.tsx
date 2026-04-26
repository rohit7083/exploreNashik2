import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { attractions } from "../nearByPlace/data";

function NearbyPlaces() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // sync from URL
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
    setSelectedCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...attractions];
    if (debouncedQuery.trim()) {
      const q = debouncedQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategory !== "all") {
      result = result.filter((a) => a.category === selectedCategory);
    }
    return result;
  }, [debouncedQuery, selectedCategory]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="pt-10 pb-8 px-4 text-white bg-black">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Nearby Places Around Nashik 🌄
          </h1>
          <p className="text-gray-300 text-md max-w-xl">
            Explore popular destinations within 30 km of Nashik — perfect for
            short trips and weekend getaways.
          </p>

          {/* Search */}
          <div className="flex gap-3 max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchParams({ search: e.target.value, category: selectedCategory });
                }}
                placeholder="Search places, temples, wineries..."
                className="w-full pl-12 pr-10 py-2 rounded-lg bg-transparent outline-none text-gray-800 dark:text-white"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); setSearchParams({ category: selectedCategory }); }}
                className="px-3 text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No places found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((place) => (
              <div key={place.id} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden">
                <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-gray-800 dark:text-white">{place.name}</h2>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NearbyPlaces;
