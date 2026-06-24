// import { useEffect, useMemo, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { attractions } from "../nearByPlace/data";

// function NearbyPlaces() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
//   const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
//   const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

//   // debounce search
//   useEffect(() => {
//     const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
//     return () => clearTimeout(t);
//   }, [searchQuery]);

//   // sync from URL
//   useEffect(() => {
//     setSearchQuery(searchParams.get("search") || "");
//     setSelectedCategory(searchParams.get("category") || "all");
//   }, [searchParams]);

//   const filtered = useMemo(() => {
//     let result = [...attractions];
//     if (debouncedQuery.trim()) {
//       const q = debouncedQuery.toLowerCase();
//       result = result.filter(
//         (a) =>
//           a.name.toLowerCase().includes(q) ||
//           a.description.toLowerCase().includes(q) ||
//           a.category.toLowerCase().includes(q)
//       );
//     }
//     if (selectedCategory !== "all") {
//       result = result.filter((a) => a.category === selectedCategory);
//     }
//     return result;
//   }, [debouncedQuery, selectedCategory]);

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
//       {/* Header */}
//       <div className="pt-10 pb-8 px-4 text-white bg-black">
//         <div className="max-w-6xl mx-auto space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Nearby Places Around Nashik 🌄
//           </h1>
//           <p className="text-gray-300 text-md max-w-xl">
//             Explore popular destinations within 15 km of Nashik — perfect for
//             short trips and weekend getaways.
//           </p>

//           {/* Search */}
//           <div className="flex gap-3 max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2">
//             <div className="relative flex-1">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value);
//                   setSearchParams({ search: e.target.value, category: selectedCategory });
//                 }}
//                 placeholder="Search places, temples, wineries..."
//                 className="w-full pl-12 pr-10 py-2 rounded-lg bg-transparent outline-none text-gray-800 dark:text-white"
//               />
//             </div>
//             {searchQuery && (
//               <button
//                 onClick={() => { setSearchQuery(""); setSearchParams({ category: selectedCategory }); }}
//                 className="px-3 text-gray-500 hover:text-red-500"
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Results */}
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         {filtered.length === 0 ? (
//           <p className="text-gray-500 dark:text-gray-400">No places found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map((place) => (
//               <div key={place.id} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden">
//                 <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h2 className="font-semibold text-lg text-gray-800 dark:text-white">{place.name}</h2>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-2">{place.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NearbyPlaces;

// import PlaceCard from "@/components/ui/PlaceCard";
// import axios from "axios";
// import { useEffect, useMemo, useState } from "react";

// interface PlaceImage {
//   imageUrl: string;
//   publicId?: string;
// }

// interface Place {
//   _id: string;
//   name: string;
//   category: string;
//   subcategory?: string;
//   description?: string;
//   location?: string;
//   distance: number;
//   rating?: number;
//   timings?: string;
//   entry_fee?: string;
//   difficulty?: string;
//   contact?: string;
//   cuisine?: string[];
//   services?: string[];
//   images: PlaceImage[];
// }

// const NearbyPlaces = () => {
//   const [places, setPlaces] = useState<Place[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [selectedCategory, setSelectedCategory] =
//     useState<string>("all");

//   useEffect(() => {
//     const fetchPlaces = async () => {
//       try {
//         setLoading(true);

//         const res = await axios.get<Place[]>(
//           "http://localhost:5000/api/getPlaces"
//         );

//         setPlaces(res.data || []);
//       } catch (error) {
//         console.error("Error fetching places:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlaces();
//   }, []);

//   const filteredPlaces = useMemo(() => {
//     let data = [...places];

//     // Filter places within 15 KM
//     data = data.filter(
//       (place) => Number(place.distance) <= 15
//     );

//     // Search filter
//     if (searchQuery.trim()) {
//       const q = searchQuery.toLowerCase();

//       data = data.filter(
//         (place) =>
//           place.name?.toLowerCase().includes(q) ||
//           place.description
//             ?.toLowerCase()
//             .includes(q) ||
//           place.category?.toLowerCase().includes(q) ||
//           place.subcategory
//             ?.toLowerCase()
//             .includes(q) ||
//           place.location?.toLowerCase().includes(q)
//       );
//     }

//     // Category filter
//     if (selectedCategory !== "all") {
//       data = data.filter(
//         (place) =>
//           place.category.toLowerCase() ===
//           selectedCategory.toLowerCase()
//       );
//     }

//     return data;
//   }, [places, searchQuery, selectedCategory]);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
//        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 py-10">

//           <h1 className="text-2xl md:text-5xl font-bold">
//             Nearby Places Around Nashik 🌄
//           </h1>

//           <p className="mt-4 text-gray-300 max-w-2xl">
//             Explore attractions within 15 KM.
//           </p>

//           {/* Search + Category */}
//           <div className="mt-8 flex flex-col md:flex-row gap-4">

//             <input
//               type="text"
//               placeholder="Search places..."
//               value={searchQuery}
//               onChange={(e) =>
//                 setSearchQuery(e.target.value)
//               }
//               className="flex-1 px-4 py-3 rounded-xl text-black"
//             />

//             <select
//               value={selectedCategory}
//               onChange={(e) =>
//                 setSelectedCategory(e.target.value)
//               }
//               className="px-4 py-3 rounded-xl text-black min-w-[220px]"
//             >
//               <option value="all">
//                 All Categories
//               </option>

//               <option value="place of Visit">
//                 Place of Visit
//               </option>

//               <option value="food">
//                 Food
//               </option>

//               <option value="temple">
//                 Temple
//               </option>
//             </select>

//           </div>
//         </div>
//       </div>

//       {/* Results */}
//       <div className="max-w-7xl mx-auto px-4 py-10">



//        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 py-10">

//   {!loading && (
//     <div className="flex justify-between items-center mb-6">
//       <h2 className="text-2xl font-bold">
//         Nearby Places
//       </h2>

//       <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
//         {filteredPlaces.length} Found
//       </span>
//     </div>
//   )}

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

//     {filteredPlaces.map((place) => (
//       <div
//         key={place._id}
//         className="relative"
//       >
//         <div className="absolute top-3 right-3 z-20 bg-black text-white px-3 py-1 rounded-full text-xs shadow">
//           📍 {place.distance} km
//         </div>

//         <PlaceCard place={place} />
//       </div>
//     ))}

//   </div>
// </div>


//       </div>
//     </div>
//   );
// };

// export default NearbyPlaces;


import PlaceCard from "@/components/ui/PlaceCard";
import axios from "axios";
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
  distance: number;
  rating?: number;
  timings?: string;
  entry_fee?: string;
  difficulty?: string;
  contact?: string;
  cuisine?: string[];
  services?: string[];
  images: PlaceImage[];
}

const NearbyPlaces = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  //pagenation code
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);

        const res = await axios.get<Place[]>(
          "http://localhost:5000/api/getPlaces"
        );
        //pagenation
        setCurrentPage(1);

        setPlaces(res.data || []);
      } catch (error) {
        console.error("Error fetching places:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [searchQuery, selectedCategory]);

  const filteredPlaces = useMemo(() => {
    let data = [...places];

    // Filter places within 15 KM
    data = data.filter((place) => Number(place.distance) <= 15);

    // Search filter
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

    // Category filter
    if (selectedCategory !== "all") {
      data = data.filter(
        (place) =>
          place.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return data;
  }, [places, searchQuery, selectedCategory]);


  const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentPlaces = filteredPlaces.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  //new pagenation
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };


  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-stone-900 dark:bg-black text-orange-50">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 py-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-400 dark:text-orange-300 mb-3">
            Within reach
          </p>

          <h1 className="text-2xl md:text-5xl font-serif font-bold">
            Nearby Places Around Nashik 🌄
          </h1>

          <p className="mt-4 text-orange-50/70 max-w-2xl">
            Explore attractions within 15 KM.
          </p>

          {/* Search + Category */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search places..."
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
              Nearby Places
            </h2>

            {/* <span className="bg-orange-600 dark:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              {filteredPlaces.length} Found

            </span> */}
            {/* pagenation */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {filteredPlaces.length} Found
              </span>

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
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>


        )}

        {loading ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-stone-500 dark:text-gray-400">
              Loading nearby places...
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* {filteredPlaces.map((place) => (
              <div key={place._id} className="relative">
                <div className="absolute top-3 right-3 z-20 bg-stone-900/90 dark:bg-black/90 text-orange-50 px-3 py-1 rounded-full text-xs shadow backdrop-blur-sm">
                  📍 {place.distance} km
                </div>

                <PlaceCard place={place} />
              </div>
            ))} */}
            {currentPlaces.map((place) => (
              <PlaceCard key={place._id} place={place} />
            ))}
          </div>
        )}

        {!loading && filteredPlaces.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">
              No places found nearby
            </h3>
            <p className="text-stone-500 dark:text-gray-400">
              Try a different search term or category.
            </p>
          </div>
        )}
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
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
        </div>
      </div>
    </div>
  );
};

export default NearbyPlaces;