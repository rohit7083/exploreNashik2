// // import { useEffect, useMemo, useState } from "react";
// // import { useSearchParams } from "react-router-dom";
// // import { attractions, categories } from "./data";

// // const ExplorePage = () => {
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const [loading, setLoading] = useState(true);

// //   const [searchQuery, setSearchQuery] = useState(
// //     searchParams.get("search") || "",
// //   );
// //   const [selectedCategory, setSelectedCategory] = useState(
// //     searchParams.get("category") || "all",
// //   );
// //   const [sortBy, setSortBy] = useState("rating");

// //   const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

// //   // loading simulation
// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 600);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   // debounce search
// //   useEffect(() => {
// //     const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
// //     return () => clearTimeout(t);
// //   }, [searchQuery]);

// //   // sync from URL
// //   useEffect(() => {
// //     const s = searchParams.get("search") || "";
// //     const c = searchParams.get("category") || "all";
// //     setSearchQuery(s);
// //     setSelectedCategory(c);
// //   }, [searchParams]);

// //   // filtering
// //   const filtered = useMemo(() => {
// //     let result = [...attractions];

// //     if (debouncedQuery.trim()) {
// //       const q = debouncedQuery.toLowerCase();
// //       result = result.filter(
// //         (a) =>
// //           a.name.toLowerCase().includes(q) ||
// //           a.description.toLowerCase().includes(q) ||
// //           a.tags.some((t) => t.toLowerCase().includes(q)) ||
// //           a.category.toLowerCase().includes(q),
// //       );
// //     }

// //     if (selectedCategory !== "all") {
// //       result = result.filter((a) => a.category === selectedCategory);
// //     }

// //     result.sort((a, b) => {
// //       if (sortBy === "rating") return b.rating - a.rating;
// //       if (sortBy === "reviews") return b.reviews - a.reviews;
// //       if (sortBy === "name") return a.name.localeCompare(b.name);
// //       return 0;
// //     });

// //     return result;
// //   }, [debouncedQuery, selectedCategory, sortBy]);

// //   return (
// //     <div className="space-y-20">
// //       <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
// //         {/* Header */}

// //         {/* Header */}
// //         <div className="pt-10 pb-8 px-4 text-white bg-black">
// //           <div className="max-w-6xl mx-auto space-y-6">
// //             {/* Badge */}
// //             <div className="bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
// //               Explore Nashik
// //             </div>

// //             {/* Title */}
// //             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
// //               Discover Nashik 🗺️
// //             </h1>

// //             {/* Subtitle */}
// //             <p className="text-gray-300 text-lg max-w-2xl">
// //               Find the best temples, vineyards, and hidden gems across Nashik
// //               city.
// //             </p>

// //             {/* Search UI */}
// //             <div className="flex gap-3 max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2">
// //               <div className="relative flex-1">
// //                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
// //                   🔍
// //                 </span>

// //                 <input
// //                   type="text"
// //                   value={searchQuery}
// //                   onChange={(e) => {
// //                     const value = e.target.value;
// //                     setSearchQuery(value);
// //                     setSearchParams({
// //                       search: value,
// //                       category: selectedCategory,
// //                     });
// //                   }}
// //                   placeholder="Search places, temples, wineries..."
// //                   className="w-full pl-12 pr-10 py-2 rounded-lg bg-transparent outline-none text-gray-800 dark:text-white"
// //                 />
// //               </div>

// //               {searchQuery && (
// //                 <button
// //                   onClick={() => {
// //                     setSearchQuery("");
// //                     setSearchParams({ category: selectedCategory });
// //                   }}
// //                   className="px-3 text-gray-500 hover:text-red-500"
// //                 >
// //                   ✕
// //                 </button>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="container-max px-4 py-8">
// //           {/* Categories */}
// //           <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat.id}
// //                 onClick={() => {
// //                   setSelectedCategory(cat.id);
// //                   setSearchParams({
// //                     search: searchQuery,
// //                     category: cat.id,
// //                   });
// //                 }}
// //                 className={`px-5 py-2 rounded-full text-sm ${
// //                   selectedCategory === cat.id
// //                     ? "bg-black text-white"
// //                     : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
// //                 }`}
// //               >
// //                 {cat.label}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Results Header */}
// //           <div className="flex justify-between mb-6">
// //             <p className="text-gray-600 dark:text-gray-400">
// //               {loading ? "Loading..." : `${filtered.length} results`}
// //             </p>

// //             <select
// //               value={sortBy}
// //               onChange={(e) => setSortBy(e.target.value)}
// //               className="border rounded-lg px-3 py-2"
// //             >
// //               <option value="rating">Rating</option>
// //               <option value="reviews">Reviews</option>
// //               <option value="name">Name</option>
// //             </select>
// //           </div>

// //           {/* ❌ CARDS REMOVED */}
// //           {filtered.length > 0 ? (
// //             <div className="text-center py-20">
// //               <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
// //                 Results found but cards are hidden
// //               </h2>
// //             </div>
// //           ) : (
// //             <div className="text-center py-20">
// //               <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
// //                 No places found
// //               </h3>
// //               <button
// //                 onClick={() => {
// //                   setSearchQuery("");
// //                   setSelectedCategory("all");
// //                   setSearchParams({});
// //                 }}
// //                 className="btn-primary"
// //               >
// //                 Clear Filters
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExplorePage;














// import PlaceCard from "@/components/ui/PlaceCard";
// import { useEffect, useMemo, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { attractions, categories } from "./data";

// const ExplorePage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [loading, setLoading] = useState(true);

//   const [searchQuery, setSearchQuery] = useState(
//     searchParams.get("search") || "",
//   );
//   const [selectedCategory, setSelectedCategory] = useState(
//     searchParams.get("category") || "all",
//   );
//   const [sortBy, setSortBy] = useState("rating");

//   const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

//   // loading simulation
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 600);
//     return () => clearTimeout(timer);
//   }, []);

//   // debounce search
//   useEffect(() => {
//     const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
//     return () => clearTimeout(t);
//   }, [searchQuery]);

//   // sync from URL
//   useEffect(() => {
//     const s = searchParams.get("search") || "";
//     const c = searchParams.get("category") || "all";
//     setSearchQuery(s);
//     setSelectedCategory(c);
//   }, [searchParams]);

//   // filtering
//   const filtered = useMemo(() => {
//     let result = [...attractions];

//     if (debouncedQuery.trim()) {
//       const q = debouncedQuery.toLowerCase();
//       result = result.filter(
//         (a) =>
//           a.name.toLowerCase().includes(q) ||
//           a.description.toLowerCase().includes(q) ||
//           a.tags.some((t) => t.toLowerCase().includes(q)) ||
//           a.category.toLowerCase().includes(q),
//       );
//     }

//     if (selectedCategory !== "all") {
//       result = result.filter((a) => a.category === selectedCategory);
//     }

//     result.sort((a, b) => {
//       if (sortBy === "rating") return b.rating - a.rating;
//       if (sortBy === "reviews") return b.reviews - a.reviews;
//       if (sortBy === "name") return a.name.localeCompare(b.name);
//       return 0;
//     });

//     return result;
//   }, [debouncedQuery, selectedCategory, sortBy]);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
//       {/* Header */}
//       <div className="pt-10 pb-8 px-4 text-white bg-black">
//         <div className="max-w-6xl mx-auto space-y-6">
          
//           <div className="bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
//             Explore Nashik
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold">
//             Discover Nashik 🗺️
//           </h1>

//           <p className="text-gray-300 text-lg max-w-2xl">
//             Find the best temples, vineyards, and hidden gems.
//           </p>

//           {/* Search */}
//           <div className="flex gap-3 max-w-2xl bg-white rounded-xl p-2">
          
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 setSearchQuery(value);
//                 setSearchParams({
//                   search: value,
//                   category: selectedCategory,
//                 });
//               }}
//               placeholder="Search places..."
//               className="w-full px-4 py-2 rounded-lg outline-none text-black"
//             />

//             {searchQuery && (
//               <button
//                 onClick={() => {
//                   setSearchQuery("");
//                   setSearchParams({ category: selectedCategory });
//                 }}
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-8">
        
//         {/* Categories
//         <div className="flex gap-2 overflow-x-auto mb-6">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => {
//                 setSelectedCategory(cat.id);
//                 setSearchParams({
//                   search: searchQuery,
//                   category: cat.id,
//                 });
//               }}
//               className={`px-4 py-2 rounded-full text-sm ${
//                 selectedCategory === cat.id
//                   ? "bg-black text-white"
//                   : "bg-white text-gray-700"
//               }`}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div> */}




//         {/* Top bar */}
//         <div className="flex justify-between mb-6">
//           <p className="text-gray-600">
//             {loading ? "Loading..." : `${filtered.length} places found`}
//           </p>

//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="border rounded-lg px-3 py-2"
//           >
//             <option value="rating">Rating</option>
//             <option value="reviews">Reviews</option>
//             <option value="name">Name</option>
//           </select>
//         </div>

//         {/* Cards */}
//         {filtered.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filtered.map((place) => (
//               <PlaceCard key={place.id} place={place} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <h3 className="text-xl font-semibold mb-2">
//               No places found
//             </h3>
//             <button
//               onClick={() => {
//                 setSearchQuery("");
//                 setSelectedCategory("all");
//                 setSearchParams({});
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



import PlaceCard from "@/components/ui/PlaceCard";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { attractions, mainCategories, subCategories } from "./data";

const ExplorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedMain, setSelectedMain] = useState(searchParams.get("main") || "all");
  const [selectedSub, setSelectedSub] = useState(searchParams.get("category") || "");
  const [sortBy, setSortBy] = useState("rating");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  useEffect(() => {
    const s = searchParams.get("search") || "";
    const m = searchParams.get("main") || "all";
    const c = searchParams.get("category") || "";
    setSearchQuery(s);
    setSelectedMain(m);
    setSelectedSub(c);
  }, [searchParams]);

  // Current subcategories to show
  const currentSubs = selectedMain !== "all" ? (subCategories[selectedMain] ?? []) : [];

  const filtered = useMemo(() => {
    let result = [...attractions];

    if (debouncedQuery.trim()) {
      const q = debouncedQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q),
      );
    }

    if (selectedSub) {
      // Filter by specific subcategory
      result = result.filter((a) => a.category === selectedSub);
    } else if (selectedMain !== "all") {
      // Filter by all subcategories under the main category
      const subsUnderMain = (subCategories[selectedMain] ?? []).map((s) => s.id);
      result = result.filter((a) => subsUnderMain.includes(a.category));
    }

    result.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    return result;
  }, [debouncedQuery, selectedMain, selectedSub, sortBy]);

  const handleMainSelect = (mainId: string) => {
    setSelectedMain(mainId);
    setSelectedSub(""); // reset sub when main changes
    setSearchParams({ search: searchQuery, main: mainId });
  };

  const handleSubSelect = (subId: string) => {
    const next = selectedSub === subId ? "" : subId; // toggle off if already selected
    setSelectedSub(next);
    setSearchParams({ search: searchQuery, main: selectedMain, category: next });
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
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);
                setSearchParams({ search: value, main: selectedMain, category: selectedSub });
              }}
              placeholder="Search places..."
              className="w-full px-4 py-2 rounded-lg outline-none text-black"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSearchParams({ main: selectedMain, category: selectedSub });
                }}
                className="px-2 text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* ── Main Categories ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleMainSelect(cat.id)}
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

        {/* ── Sub Categories (only shown when a main is selected) ── */}
        {currentSubs.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
            {currentSubs.map((sub) => (
              <button
                key={sub.id}
                onClick={() => handleSubSelect(sub.id)}
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

        {/* Top bar */}
        <div className="flex justify-between mb-6">
          <p className="text-gray-600">
            {loading ? "Loading..." : `${filtered.length} places found`}
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
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((place) => (
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
                setSearchParams({});
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