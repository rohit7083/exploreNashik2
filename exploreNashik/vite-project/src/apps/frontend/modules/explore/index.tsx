// import { usePlaces } from "@/api/usePlaces";
// import PlaceCard from "@/components/ui/PlaceCard";
// import { useMemo, useState } from "react";
// import { mainCategories, subCategories } from "./data";

// const ExplorePage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedMain, setSelectedMain] = useState("all");
//   const [selectedSub, setSelectedSub] = useState("");
//   const [sortBy, setSortBy] = useState("rating");
//   const { data: places = [], isLoading: isLoading } = usePlaces();
//   // Fetch API data
//   // useEffect(() => {
//   //   const fetchPlaces = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const res = await axios.get("http://localhost:5000/api/getPlaces");
//   //       console.log(res?.data);
//   //       // >>>>>>> Stashed changes

//   //       setPlaces(res.data || []);
//   //     } catch (error) {
//   //       console.error("API fetch failed:", error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchPlaces();
//   // }, []);

//   // Current sub categories

//  debugger;
//   const currentSubs =
//     selectedMain !== "all" ? subCategories[selectedMain] || [] : [];

//   // Filter + Search + Sort
//   const filteredPlaces = useMemo(() => {
//     const subCategoryGroups: Record<string, string[]> = {
//       Dam: ["Dam", "lake", "Waterfall"],
//     };
//     let result = [...places];

//     // Search
//     if (searchQuery.trim()) {
//       const q = searchQuery.toLowerCase();

//       result = result.filter(
//         (place) =>
//           place.name.toLowerCase().includes(q) ||
//           place.description.toLowerCase().includes(q) ||
//           place.category.toLowerCase().includes(q) ||
//           place.tags?.some((tag) => tag.toLowerCase().includes(q)),
//       );
//     }

//     if (selectedSub) {
//       const group = subCategoryGroups[selectedSub];

//       if (group) {
//         result = result.filter((place) =>
//           group.some(
//             (item) => item.toLowerCase() === place.subcategory?.toLowerCase(),
//           ),
//         );
//       } else {
//         result = result.filter(
//           (place) =>
//             place.subcategory?.toLowerCase() === selectedSub.toLowerCase(),
//         );
//       }
//     }

//     if (selectedMain !== "all") {
//       result = result.filter((place) =>
//         place.category
//           ?.toLowerCase()
//           .trim()
//           .includes(selectedMain.toLowerCase().trim()),
//       );
//     }

//     // Sorting
//     if (sortBy === "rating") {
//       result.sort((a, b) => b.rating - a.rating);
//     }
//     //new s

//     if (sortBy === "reviews") {
//       result.sort((a, b) => b.reviews - a.reviews);
//     }

//     if (sortBy === "name") {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     }

//     return result;
//   }, [places, searchQuery, selectedMain, selectedSub, sortBy]);

//   const handleMainSelect = (mainId: string) => {
//     setSelectedMain(mainId);
//     setSelectedSub("");
//   };

//   const handleSubSelect = (subId: string) => {
//     if (selectedSub === subId) {
//       setSelectedSub("");
//     } else {
//       setSelectedSub(subId);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       {/* Header */}
//       <div className="pt-10 pb-8 px-4 text-white bg-black">
//         <div className="max-w-6xl mx-auto space-y-6">
//           <div className="bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
//             Explore Nashik
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold">Discover Nashik 🗺️</h1>

//           <p className="text-gray-300 text-lg max-w-2xl">
//             Find the best temples, vineyards, and hidden gems.
//           </p>

//           {/* Search */}
//           <div className="flex gap-3 max-w-2xl bg-white rounded-xl p-2">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search places..."
//               className="w-full px-4 py-2 rounded-lg outline-none text-black"
//             />

//             {searchQuery && (
//               <button
//                 onClick={() => setSearchQuery("")}
//                 className="px-2 text-gray-500 hover:text-red-500"
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Main Categories */}
//         <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
//           {mainCategories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => {
//                 console.log("Main Category:", cat.label);
//                 handleMainSelect(cat.id);
//               }}
//               className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-all ${
//                 selectedMain === cat.id
//                   ? "bg-black text-white shadow"
//                   : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
//               }`}
//             >
//               <span>{cat.icon}</span>
//               <span>{cat.label}</span>
//             </button>
//           ))}
//         </div>

//         {/* Sub Categories */}
//         {currentSubs.length > 0 && (
//           <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
//             {currentSubs.map((sub) => (
//               <button
//                 key={sub.id}
//                 onClick={() => {
//                   console.log("Sub Category:", sub.label);
//                   handleSubSelect(sub.id);
//                 }}
//                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
//                   selectedSub === sub.id
//                     ? "bg-green-700 text-white shadow"
//                     : "bg-green-50 text-green-800 border border-green-200 hover:bg-green-100"
//                 }`}
//               >
//                 <span>{sub.icon}</span>
//                 <span>{sub.label}</span>
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Top Bar */}
//         <div className="flex justify-between mb-6">
//           <p className="text-gray-600">
//             {isLoading ? "Loading..." : `${filteredPlaces.length} places found`}
//           </p>

//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="border rounded-lg px-3 py-2 text-sm"
//           >
//             <option value="rating">Rating</option>
//             <option value="reviews">Reviews</option>
//             <option value="name">Name</option>
//           </select>
//         </div>

//         {/* Cards */}
//         {isLoading ? (
//           <div className="text-center py-20">
//             <h3 className="text-xl font-semibold">Loading places...</h3>
//           </div>
//         ) : filteredPlaces.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filteredPlaces.map((place) => (
//               <PlaceCard key={place.id} place={place} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <h3 className="text-xl font-semibold mb-2">No places found</h3>

//             <button
//               onClick={() => {
//                 setSearchQuery("");
//                 setSelectedMain("all");
//                 setSelectedSub("");
//               }}
//               className="bg-black text-white px-4 py-2 rounded"
//             >
//               Clear Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExplorePage;

import { useEffect, useRef } from "react";

import { usePlaces } from "@/api/usePlaces";
import PlaceCard from "@/components/ui/PlaceCard";
import { useMemo, useState } from "react";
import SEO from "../../../../components/seo/SEO";
import { mainCategories, subCategories } from "./data";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMain, setSelectedMain] = useState("all");
  const [selectedSub, setSelectedSub] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePlaces(
      selectedMain === "all" ? undefined : selectedMain,
      selectedSub || undefined,
    );

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px",
      },
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  // Current sub categories

  const currentSubs =
    selectedMain !== "all" ? subCategories[selectedMain] || [] : [];
  const places = data?.pages.flatMap((page) => page.places) ?? [];
  // Filter + Search + Sort
  const filteredPlaces = useMemo(() => {
    let result = [...places];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();

      result = result.filter(
        (place) =>
          place.name.toLowerCase().includes(q) ||
          place.description.toLowerCase().includes(q) ||
          place.category.toLowerCase().includes(q) ||
          place.tags?.some((tag: string) => tag.toLowerCase().includes(q)),
      );
    }

    // Sorting
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [places, searchQuery, sortBy]);
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
    <>
  <SEO
  title="Explore Attractions | Explore Nashik"
  description="Discover famous tourist attractions in Nashik."
  url="https://explorenashik.in/explore"
/>
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      {/* Header */}
      <div className="pt-10 pb-8 px-4 text-orange-50 bg-stone-900 dark:bg-black">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-amber-400 dark:bg-amber-500 text-stone-900 text-xs font-semibold px-3 py-1 rounded-full w-fit">
            Explore Nashik
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Discover Nashik 🗺️
          </h1>

          <p className="text-orange-50/70 text-lg max-w-2xl">
            Find the best temples, vineyards, and hidden gems.
          </p>

          {/* Search */}
          <div className="flex gap-3 max-w-2xl bg-white dark:bg-gray-800 rounded-xl p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search places..."
              className="w-full px-4 py-2 rounded-lg outline-none bg-transparent text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-gray-500"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-2 text-stone-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400"
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
              onClick={() => handleMainSelect(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-all ${
                selectedMain === cat.id
                  ? "bg-orange-600 dark:bg-orange-500 text-white shadow"
                  : "bg-white dark:bg-gray-800 text-stone-700 dark:text-gray-300 border border-stone-200 dark:border-gray-700 hover:border-stone-400 dark:hover:border-gray-500"
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
                onClick={() => handleSubSelect(sub.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                  selectedSub === sub.id
                    ? "bg-teal-600 dark:bg-teal-500 text-white shadow"
                    : "bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/50"
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
          <p className="text-stone-500 dark:text-gray-400">
            {isLoading
              ? "Loading..."
              : `${data?.pages?.[0]?.total} places found`}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-stone-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-stone-900 dark:text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
          >
            <option value="rating">Rating</option>
            <option value="reviews">Reviews</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Cards */}
        {isLoading ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-stone-500 dark:text-gray-400">
              Loading places...
            </h3>
          </div>
        ) : filteredPlaces.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <PlaceCard key={place._id} place={place} />
              ))}
            </div>

            <div ref={loadMoreRef} className="h-10" />

            {isFetchingNextPage && (
              <p className="text-center py-4">Loading more...</p>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold mb-2 text-stone-900 dark:text-white">
              No places found
            </h3>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedMain("all");
                setSelectedSub("");
              }}
              className="bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ExplorePage;
