import PlaceCard from "@/components/ui/PlaceCard";
import { useEffect, useMemo, useState } from "react";

interface PlaceImage {
  imageUrl: string;
  publicId?: string;
}

interface Place {
  _id: string;
  name: string;
  category: string;
  subcategory?: string;
  description?: string;
  location?: string;
  rating?: number;
  timings?: string;
  entry_fee?: string;
  difficulty?: string;
  contact?: string;
  cuisine?: string[];
  services?: string[];
  images: PlaceImage[];
}

const FAVORITES_KEY = "favoritePlaces";

// Small helpers so localStorage logic lives in one place
const readFavorites = (): Place[] => {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Error reading favorites from localStorage:", error);
    return [];
  }
};

const writeFavorites = (places: Place[]) => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(places));
  } catch (error) {
    console.error("Error writing favorites to localStorage:", error);
  }
};

const FavoritePlaces = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [removingId, setRemovingId] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    const favorites = readFavorites();
    setPlaces(favorites);
    setLoading(false);

    // Keep in sync if favorites change in another tab
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === FAVORITES_KEY) {
        setPlaces(readFavorites());
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const filteredPlaces = useMemo(() => {
    let data = [...places];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();

      data = data.filter(
        (place) =>
          place.name?.toLowerCase().includes(q) ||
          place.description?.toLowerCase().includes(q) ||
          place.category?.toLowerCase().includes(q) ||
          place.subcategory?.toLowerCase().includes(q) ||
          place.location?.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "all") {
      data = data.filter(
        (place) =>
          place.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return data;
  }, [places, searchQuery, selectedCategory]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPlaces.length / itemsPerPage)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentPlaces = filteredPlaces.slice(indexOfFirstItem, indexOfLastItem);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  // const handleRemoveFavorite = (placeId: string) => {
  //   setRemovingId(placeId);

  //   // small delay just so the spinner/feedback is visible; remove if not needed
  //   setTimeout(() => {
  //     setPlaces((prev) => {
  //       const updated = prev.filter((p) => p._id !== placeId);
  //       writeFavorites(updated);
  //       return updated;
  //     });
  //     setRemovingId(null);
  //   }, 150);
  // };



  const handleRemoveFavorite = (placeId: string) => {
    setRemovingId(placeId);

    setTimeout(() => {
      setPlaces((prev) => {
        const updated = prev.filter((p) => p._id !== placeId);

        writeFavorites(updated);

        // Navbar update kar
        window.dispatchEvent(new Event("favoritesUpdated"));

        return updated;
      });

      setRemovingId(null);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-stone-900 dark:bg-black text-orange-50">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 py-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-400 dark:text-orange-300 mb-3">
            Saved for later
          </p>

          <h1 className="text-2xl md:text-5xl font-serif font-bold">
            Your Favorite Places ❤️
          </h1>

          <p className="mt-4 text-orange-50/70 max-w-2xl">
            All the places you've liked, in one spot.
          </p>

          {/* Search + Category */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search your favorites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white dark:bg-gray-800 text-stone-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 min-w-[220px]"
            >
              <option value="all">All Categories</option>
              <option value="place of Visit">Place of Visit</option>
              <option value="food">Food</option>
              <option value="temple">Temple</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 py-10">
        {!loading && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
              Your Favorites
            </h2>

            <span className="bg-orange-600 dark:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              {filteredPlaces.length} Saved
            </span>
          </div>
        )}

        {loading ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-stone-500 dark:text-gray-400">
              Loading your favorites...
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentPlaces.map((place) => (
              <div key={place._id} className="relative group">
                <button
                  onClick={() => handleRemoveFavorite(place._id)}
                  disabled={removingId === place._id}
                  aria-label={`Remove ${place.name} from favorites`}
                  className="absolute top-3 right-3 z-20 h-9 w-9 rounded-full bg-white/90 dark:bg-black/80
                             text-red-600 shadow flex items-center justify-center
                             hover:bg-red-600 hover:text-white transition-all
                             disabled:opacity-50"
                >
                  {removingId === place._id ? (
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "✕"
                  )}
                </button>

                <PlaceCard place={place} />
              </div>
            ))}
          </div>
        )}

        {!loading && filteredPlaces.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">
              {places.length === 0
                ? "You haven't saved any places yet"
                : "No favorites match your search"}
            </h3>
            <p className="text-stone-500 dark:text-gray-400">
              {places.length === 0
                ? "Explore places and tap the heart icon to save them here."
                : "Try a different search term or category."}
            </p>
          </div>
        )}

        {!loading && filteredPlaces.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={index} className="px-2">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => setCurrentPage(Number(page))}
                  className={`w-10 h-10 rounded ${currentPage === page
                      ? "bg-orange-500 text-white"
                      : "border"
                    }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePlaces;