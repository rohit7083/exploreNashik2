import { usePlaces } from "@/api/usePlaces";
import PlaceCard from "@/components/ui/PlaceCard";
import { useMemo, useState } from "react";
import { mainCategories, subCategories } from "./data";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMain, setSelectedMain] = useState("all");
  const [selectedSub, setSelectedSub] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const { data: places = [], isLoading: loading } = usePlaces();
  // Fetch API data
  // useEffect(() => {
  //   const fetchPlaces = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await axios.get("http://localhost:5000/api/getPlaces");
  //       console.log(res?.data);
  //       // >>>>>>> Stashed changes

  //       setPlaces(res.data || []);
  //     } catch (error) {
  //       console.error("API fetch failed:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPlaces();
  // }, []);

  // Current sub categories
 
 
 debugger;
  const currentSubs =
    selectedMain !== "all" ? subCategories[selectedMain] || [] : [];

  // Filter + Search + Sort
  const filteredPlaces = useMemo(() => {
    const subCategoryGroups: Record<string, string[]> = {
      Dam: ["Dam", "lake", "Waterfall"],
    };
    let result = [...places];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();

      result = result.filter(
        (place) =>
          place.name.toLowerCase().includes(q) ||
          place.description.toLowerCase().includes(q) ||
          place.category.toLowerCase().includes(q) ||
          place.tags?.some((tag) => tag.toLowerCase().includes(q)),
      );
    }

    if (selectedSub) {
      const group = subCategoryGroups[selectedSub];

      if (group) {
        result = result.filter((place) =>
          group.some(
            (item) => item.toLowerCase() === place.subcategory?.toLowerCase(),
          ),
        );
      } else {
        result = result.filter(
          (place) =>
            place.subcategory?.toLowerCase() === selectedSub.toLowerCase(),
        );
      }
    }

    if (selectedMain !== "all") {
      result = result.filter((place) =>
        place.category
          ?.toLowerCase()
          .trim()
          .includes(selectedMain.toLowerCase().trim()),
      );
    }

    // Sorting
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    //new s

    if (sortBy === "reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [places, searchQuery, selectedMain, selectedSub, sortBy]);

  const handleMainSelect = (mainId: string) => {
    setSelectedMain(mainId);
    setSelectedSub("");
  };

  const handleSubSelect = (subId: string) => {
    if (selectedSub === subId) {
      setSelectedSub("");
    } else {
      setSelectedSub(subId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="pt-10 pb-8 px-4 text-white bg-black">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
            Explore Nashik
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">Discover Nashik 🗺️</h1>

          <p className="text-gray-300 text-lg max-w-2xl">
            Find the best temples, vineyards, and hidden gems.
          </p>

          {/* Search */}
          <div className="flex gap-3 max-w-2xl bg-white rounded-xl p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search places..."
              className="w-full px-4 py-2 rounded-lg outline-none text-black"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-2 text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                console.log("Main Category:", cat.label);
                handleMainSelect(cat.id);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-all ${
                selectedMain === cat.id
                  ? "bg-black text-white shadow"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Sub Categories */}
        {currentSubs.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
            {currentSubs.map((sub) => (
              <button
                key={sub.id}
                onClick={() => {
                  console.log("Sub Category:", sub.label);
                  handleSubSelect(sub.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                  selectedSub === sub.id
                    ? "bg-green-700 text-white shadow"
                    : "bg-green-50 text-green-800 border border-green-200 hover:bg-green-100"
                }`}
              >
                <span>{sub.icon}</span>
                <span>{sub.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Top Bar */}
        <div className="flex justify-between mb-6">
          <p className="text-gray-600">
            {loading ? "Loading..." : `${filteredPlaces.length} places found`}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            <option value="rating">Rating</option>
            <option value="reviews">Reviews</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold">Loading places...</h3>
          </div>
        ) : filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold mb-2">No places found</h3>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedMain("all");
                setSelectedSub("");
              }}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
